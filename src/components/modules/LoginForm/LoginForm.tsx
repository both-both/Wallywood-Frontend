import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../elements/Buttom/Buttom";
import { Input } from "../../elements/Input/Input";
import { Label } from "../../elements/Label/Label";
import { ErrorText } from "../../elements/ErrorText/ErrorText";
import { FormGroup } from "../FormGroup/FormGroup";
import { LoginFormStyled } from "./LoginForm.styled";
import type { FormValues } from "./LoginForm.types";

const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setLoggedIn(true);
    reset();
  };

  return (
    <LoginFormStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <div>
            <Label htmlFor="email">
              Din email: <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Indtast din email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && <ErrorText>Email skal udfyldes</ErrorText>}
        </FormGroup>

        <FormGroup>
          <div>
            <Label htmlFor="password">
              Din adgangskode: <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Indtast din adgangskode"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && <ErrorText>Adgangskode skal udfyldes</ErrorText>}
        </FormGroup>

        <div className="form-buttons">
          <Button type="submit" textValue="Login" />
          <Button type="button" textValue="Annuller" onClick={() => reset()} />
        </div>

        {loggedIn && <p>Du er logget ind.</p>}
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
