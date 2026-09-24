import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../elements/Buttom/Buttom";
import { Input } from "../../elements/Input/Input";
import { Label } from "../../elements/Label/Label";
import { Textarea } from "../../elements/Textarea/Textarea";
import { ErrorText } from "../../elements/ErrorText/ErrorText";
import { FormGroup } from "../FormGroup/FormGroup";
import { ContactFormStyled } from "./ContactForm.styled";
import { contactSchema, type ContactFormValues } from "./ContactForm.types";

// zodResolver med contactSchema, så valideringen kører på submit
export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    alert("Tak for din besked, vi kontakter dig hurtigst muligt");
    reset();
  };

  return (
    <ContactFormStyled onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <FormGroup>
          <div>
            <Label htmlFor="name">
              Dit navn: <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Indtast dit navn"
              {...register("name")}
            />
          </div>
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <div>
            <Label htmlFor="email">
              Din email: <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Indtast din email"
              {...register("email")}
            />
          </div>
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <div>
            <Label htmlFor="message">
              Din besked: <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Indtast en besked"
              {...register("message")}
            />
          </div>
          {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
        </FormGroup>

        <div className="form-buttons">
          <Button type="submit" textValue="Send" />
          <Button type="button" textValue="Annuller" onClick={() => reset()} />
        </div>
      </fieldset>
    </ContactFormStyled>
  );
};
