import { ContentWrapper } from "../../components/elements/ContentWrapper/ContentWrapper";
import LoginForm from "../../components/modules/LoginForm/LoginForm";

export const LoginPage = () => {
  return (
    <ContentWrapper title="Login" description="Log ind på Wallywood">
      <LoginForm />
    </ContentWrapper>
  );
};
