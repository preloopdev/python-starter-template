import { SignUp } from "@clerk/react"

// Clerk's path routing needs a page that renders the sign-up component at the
// instance's sign-up URL. Without it, the "Sign up" link in <SignIn/> leaves
// the app for Clerk's hosted Account Portal, and flows that expect to stay in
// the app (the Playwright sign-up test) never see the verification step.
export default function SignUpPage() {
  return (
    <div className="mt-[10%] flex min-h-screen justify-center">
      <SignUp routing="path" path="/sign-up" />
    </div>
  )
}
