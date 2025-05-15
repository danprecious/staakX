
import AuthComponent from "../_components/authComponent"
import FormContainer from "../_components/formContainer"


const SignInPage = () => {
  return (
    <FormContainer title="Welcome back to " >
          <AuthComponent title="Enter your email to sign in" btnText="Sign in with email" emailUrl="" githubUrl="" googleUrl=""  />
    </FormContainer>
  )
}

export default SignInPage
