import LoginForm from '../../src/components/loginForm'
import { LoginFormFeature } from '../features/loginForm'

const loginForm: LoginFormFeature = new LoginFormFeature()

describe('LoginForm Component', () => {
  beforeEach(() => {
    cy.mount(
      <LoginForm
        onSubmit={(data: any) => {
          expect(data.username).to.equal('admin')
          expect(data.password).to.equal('password')
        }}
      />,
    )
  })

  it('should renders correctly and handles form submission', () => {
    loginForm.checkLoginForm()
  })

  it('should render error message when login fails', () => {
    loginForm.checkLoginError()
  })
})
