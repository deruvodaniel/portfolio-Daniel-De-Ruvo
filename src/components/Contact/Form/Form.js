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
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    setShowLoading(true);
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        reset();
        setShowLoading(false);
        setShowModal({ state: "true", text: t('form.sentSuccess') });
      })
      .catch(() => {
        setShowLoading(false);
        setShowModal({
          state: "false",
          text: t('form.sentError'),
        });
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
                autocomplete="off"
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
                    value: 3,
                    message: t('form.minName'),
                  },
                  maxLength: {
                    value: 20,
                    message: t('form.maxName'),
                  },
                  pattern: {
                    value: /^[ a-zA-Z0]+$/,
                    message: t('form.lettersOnly'),
                  },
                })}
              />
              <ErrorMessage>{errors?.name?.message}</ErrorMessage>
            </BoxInput>
            <BoxInput className="input__phone">
              <input
                autocomplete="off"
                type="tel"
                name="phone"
                className={errors.phone && "input__error"}
                placeholder={t('form.phone')}
                {...register("phone", {
                  maxLength: {
                    value: 20,
                    message: t('form.maxPhone'),
                  },
                  minLength: {
                    value: 10,
                    message: t('form.minPhone'),
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: t('form.numbersOnly'),
                  },
                })}
              />
              <ErrorMessage> {errors?.phone?.message} </ErrorMessage>
            </BoxInput>
            <BoxInput className="input__email">
              <input
                autocomplete="off"
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
                    value: 6,
                    message: t('form.minSubject'),
                  },
                  maxLength: {
                    value: 30,
                    message: t('form.maxSubject'),
                  },
                  pattern: {
                    value: /^[ a-zA-Z0-9]+$/,
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
            <Btn type="submit">{t('form.send')}</Btn>
          </Form>
        )}
      </SectionForm>
      {showModal && <ModalMessage />}
    </>
  );
};

export default MyForm;
