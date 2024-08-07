import { LoginForm } from '../../code/loginForm/loginForm'

const loginForm: LoginForm = new LoginForm()

export class LoginFormFeature {
  public checkLoginForm = () => {
    loginForm.checkLoginForm()
  }

  public checkLoginError = () => {
    loginForm.checkLoginError()
  }
}
