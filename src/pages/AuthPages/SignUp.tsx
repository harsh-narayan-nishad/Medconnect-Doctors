import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
title="Medconnect SignUp Dashboard | Medconnect - Health Dashboard"
description="This is the SignUp Dashboard page for Medconnect - Health Dashboard"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
