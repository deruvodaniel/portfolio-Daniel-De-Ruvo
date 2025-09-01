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
                placeholder="Cellphone"
                {...register("phone", {
                  maxLength: {
                    value: 20,
                    message: "The maximum number of characters is 20",
                  },
                  minLength: {
                    value: 10,
                    message: "The minimum number of characters is 10",
                  },
                  pattern: {
                    value: /^\d+$/,
                    message: "You can only enter numbers",
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
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                  minLength: {
                    value: 10,
                    message: "The minimum number of characters is 10",
                  },
                  maxLength: {
                    value: 40,
                    message: "The maximum number of characters is 40",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "You must enter a valid email address",
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
                placeholder="Subject"
                className={errors.subject && "input__error"}
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                  minLength: {
                    value: 6,
                    message:
                      "The subject line must be at least 6 characters long",
                  },
                  maxLength: {
                    value: 30,
                    message: "Maximum characters reached",
                  },
                  pattern: {
                    value: /^[ a-zA-Z0-9]+$/,
                    message: "You can only enter letters and numbers",
                  },
                })}
              />
              <ErrorMessage> {errors?.subject?.message} </ErrorMessage>
            </BoxInput>
            <ContainerTextArea>
              <Textarea
                placeholder="Message"
                name="message"
                className={errors.message && "input__error"}
                {...register("message", {
                  required: {
                    value: true,
                    message: "Field is required",
                  },
                  minLength: {
                    value: 10,
                    message: "The message must be at least 10 characters long",
                  },
                  maxLength: {
                    value: 500,
                    message: "Maximum characters reached",
                  },
                })}
              />
            </ContainerTextArea>
            <ErrorMessage> {errors?.message?.message} </ErrorMessage>
            <Btn type="submit">SEND</Btn>
          </Form>
        )}
      </SectionForm>
      {showModal && <ModalMessage />}
    </>
  );
};

export default MyForm;
