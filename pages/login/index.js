import React, {useState} from 'react';
import Link from 'next/link';
import routes from '../../utils/routes';
import CustomInput from '../../components/CustomInput';
import AuthSideComponent from '../../components/AuthSideComponent';
import Button from '../../components/Button';
import {useForm} from 'react-hook-form';
import loginStyles from './login.module.css';
import {signIn} from 'next-auth/react';
import googleIcon from '../../public/images/icons/google.svg';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [loading, setLoading] = useState(false);

  const handleLogin = async ({email, password}) => {
    setLoading(true);
    signIn("credentials", {email, password, callbackUrl: "/"})
    setLoading(false);
  };
  return (
    <>
      <div className={'h-full grid grid-cols-1 lg:grid-cols-2 gap-y-8'}>
        <AuthSideComponent/>
        <div className={loginStyles.right}>
          <div className={loginStyles.formWrapper}>
            <h1 className={'h1'}>Login</h1>
            <p className={`${loginStyles.subText} font-medium text-black`}>
              Don’t have an account?
              <Link href={routes.register} className={`${loginStyles.link} link`}>
                Create One
              </Link>
            </p>
            <form
              className={loginStyles.form}
              onSubmit={handleSubmit(handleLogin)}
            >
              <div className={'mb-6'}>
                <CustomInput
                  variant={'floating'}
                  type={'email'}
                  label={'Email *'}
                  name={'email'}
                  {...register('email', {required: true})}
                />
              </div>
              <div className={'mb-6'}>
                <CustomInput
                  variant={'floating'}
                  type={'password'}
                  label={'Password *'}
                  name={'password'}
                  {...register('password', {required: true})}
                />
              </div>
              <div className="flex justify-end items-center">
                {/*<Link href={routes.forgotPassword}>*/}
                {/*  <a className={`link text-sm`}>Forgot my password</a>*/}
                {/*</Link>*/}
                <Button
                  type={'submit'}
                  disabled={loading}
                  className={loginStyles.btnSubmit}
                >
                  Enter
                </Button>
              </div>
            </form>
            <div className={'line-text mt-4 mb-6'}>
              <span>or</span>
            </div>
            <div>
              <Button
                variant={'outline'}
                icon={googleIcon}
                className={loginStyles.googleSignin}
                onClick={() => signIn("google", {callbackUrl: "/"})}
              >
                Connect with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {};

export default Login;
