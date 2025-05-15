
import FormContainer from "../_components/formContainer"
import AuthComponent from "../_components/authComponent"


const SignUpPage = () => {
    return (

        <FormContainer title="Up your stack with ">
            <AuthComponent title="Enter your email to sign up" btnText="Sign up with email" emailUrl="" githubUrl="" googleUrl="" />
        </FormContainer>
    )
}

export default SignUpPage
