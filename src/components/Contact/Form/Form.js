import {
  SectionForm,
  Form,
  Textarea,
  Btn,
  ErrorMessage,
  BoxInput,
  ContainerTextArea,
} from "./Form.styles";
import { useForm } from "react-hook-form";
import ModalMessageForm from "components/ModalMessageForm";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ModalLoading from "components/ModalLoading";
import { useI18n } from "context/i18nContext";

const dataEmailer = {
  serviceId: process.env.REACT_APP_SERVICE_ID,
  templateId: process.env.REACT_APP_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
};

const MyForm = () => {
  const { serviceId, templateId, publicKey } = dataEmailer;
  const { showModal, ModalMessage, setShowModal } = ModalMessageForm();
  const [showLoading, setShowLoading] = useState(false);
  const form = useRef(null);
  const { t } = useI18n();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ 
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const hasEmailConfig = Boolean(serviceId && templateId && publicKey);

  const onSubmit = () => {
    if (!hasEmailConfig) {
      setShowModal({ state: "false", text: t('form.sentError') + ' (EmailJS config missing)' });
      return;
    }
    setShowLoading(true);
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        reset();
        setShowLoading(false);
        setShowModal({ state: "true", text: t('form.sentSuccess') });
      })
      .catch((err) => {
        setShowLoading(false);
        const reason = err?.text || err?.message || 'EmailJS error';
        setShowModal({ state: "false", text: `${t('form.sentError')}: ${reason}` });
      });
  };

  return (
    <>
      <SectionForm>
        {showLoading ? (
          <ModalLoading />
        ) : (
          <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <BoxInput className="input__name">
              <input
                autoComplete="off"
                type="text"
                placeholder={t('form.name')}
                name="name"
                className={errors.name && "input__error"}
                {...register("name", {
                  required: {
                    value: true,
                    message: t('form.required'),
                  },
                  minLength: {
                    value: 2,
                    message: t('form.minName'),
                  },
                  maxLength: {
                    value: 50,
                    message: t('form.maxName'),
                  },
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
                    message: t('form.lettersOnly'),
                  },
                })}
              />
              <ErrorMessage>{errors?.name?.message}</ErrorMessage>
            </BoxInput>
            <BoxInput className="input__phone">
              <input
                autoComplete="off"
                type="tel"
                name="phone"
                className={errors.phone && "input__error"}
                placeholder={t('form.phone')}
                {...register("phone", {
                  validate: (value) => {
                    if (!value || value === '') return true; // Field is optional
                    if (value.length < 10) return t('form.minPhone');
                    if (value.length > 20) return t('form.maxPhone');
                    if (!/^\d+$/.test(value)) return t('form.numbersOnly');
                    return true;
                  }
                })}
              />
              <ErrorMessage> {errors?.phone?.message} </ErrorMessage>
            </BoxInput>
            <BoxInput className="input__email">
              <input
                autoComplete="off"
                className={errors.email && "input__error"}
                type="email"
                name="email"
                placeholder={t('form.email')}
                {...register("email", {
                  required: {
                    value: true,
                    message: t('form.required'),
                  },
                  minLength: {
                    value: 10,
                    message: t('form.minEmail'),
                  },
                  maxLength: {
                    value: 40,
                    message: t('form.maxEmail'),
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: t('form.invalidEmail'),
                  },
                })}
              />
              <ErrorMessage> {errors?.email?.message} </ErrorMessage>
            </BoxInput>
            <BoxInput className="input__subject">
              <input
                autoComplete="off"
                type="text"
                name="subject"
                placeholder={t('form.subject')}
                className={errors.subject && "input__error"}
                {...register("subject", {
                  required: {
                    value: true,
                    message: t('form.required'),
                  },
                  minLength: {
                    value: 3,
                    message: t('form.minSubject'),
                  },
                  maxLength: {
                    value: 100,
                    message: t('form.maxSubject'),
                  },
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s0-9.,!?()-]+$/,
                    message: t('form.lettersNumbers'),
                  },
                })}
              />
              <ErrorMessage> {errors?.subject?.message} </ErrorMessage>
            </BoxInput>
            <ContainerTextArea>
              <Textarea
                placeholder={t('form.message')}
                name="message"
                className={errors.message && "input__error"}
                {...register("message", {
                  required: {
                    value: true,
                    message: t('form.required'),
                  },
                  minLength: {
                    value: 10,
                    message: t('form.minMessage'),
                  },
                  maxLength: {
                    value: 500,
                    message: t('form.maxMessage'),
                  },
                })}
              />
            </ContainerTextArea>
            <ErrorMessage> {errors?.message?.message} </ErrorMessage>
            <Btn type="submit" disabled={!isValid}>
              {!hasEmailConfig ? 'Email Config Missing' : t('form.send')}
            </Btn>
          </Form>
        )}
      </SectionForm>
      {showModal && <ModalMessage />}
    </>
  );
};

export default MyForm;
