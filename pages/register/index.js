import React, {useState} from 'react';
import Link from 'next/link';
import routes from '../../utils/routes';
import {useForm} from 'react-hook-form';
import googleIcon from '../../public/images/icons/google.svg';
import CustomInput from '../../components/CustomInput';
import AuthSideComponent from '../../components/AuthSideComponent';
import Button from '../../components/Button';
import {registerAPI} from '../../apis/authentication';
import {toast} from 'react-toastify';
import loginStyles from '../login/login.module.css';
import {signIn, useSession} from "next-auth/react";
import {axios} from "../../apis";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {setToken, data: setUserData} = useSession();

  const [loading, setLoading] = useState(false);

  const handleRegister = async ({
                                  email,
                                  firstName,
                                  lastName,
                                  password,
                                  terms,
                                }) => {
    if (!terms) {
      toast.error('Please accept our Terms of use before continuing.');
      return;
    }

    setLoading(true);
    const res = await axios.put('/user/create', {
      email,
      firstName,
      lastName,
      password,
    });

    if (res.isSuccess()) {
      toast.success('User created Successfully');
      toast.success('Logging you in...');
      signIn('credentials', {email, password, callbackUrl: '/'});
    } else
      toast.error('Unable to create user. Please try again later');

    setLoading(false);
  };

  return (
    <>
      <div className={'h-full grid grid-cols-1 lg:grid-cols-2 gap-y-8'}>
        <AuthSideComponent/>
        <div className={loginStyles.right}>
          <div className={loginStyles.formWrapper}>
            <h1 className={'h1'}>Create an Account</h1>
            <p className={`${loginStyles.subText} font-medium text-black`}>
              Already have an account?
              <Link href={routes.login} className={`${loginStyles.link} link`}>
                Login
              </Link>
            </p>
            <form
              className={loginStyles.form}
              onSubmit={handleSubmit(handleRegister)}
            >
              <div className={'mb-6'}>
                <CustomInput
                  variant={'floating'}
                  type={'email'}
                  label={'Email *'}
                  name={'email'}
                  error={errors.email}
                  {...register('email', {required: true})}
                />
              </div>
              <div className={'mb-6 grid grid-cols-2 gap-x-6'}>
                <CustomInput
                  variant={'floating'}
                  type={'text'}
                  label={'Name *'}
                  name={'firstName'}
                  error={errors.firstName}
                  {...register('firstName', {required: true})}
                />
                <CustomInput
                  variant={'floating'}
                  type={'text'}
                  label={'Surname *'}
                  name={'lastName'}
                  error={errors.lastName}
                  {...register('lastName', {required: true})}
                />
              </div>
              <div className={'mb-6'}>
                <CustomInput
                  variant={'floating'}
                  type={'password'}
                  label={'Password *'}
                  name={'password'}
                  error={errors.password}
                  {...register('password', {required: true})}
                />
              </div>
              <div className={'flex justify-start items-start gap-x-4 mb-6 '}>
                <input id={'terms'} type="checkbox" {...register('terms')} />
                <label
                  htmlFor={'terms'}
                  className={`${loginStyles.linkText} linkText`}
                >
                  If you click in “Create Account” means that you have read and
                  accept our{' '}
                  <a
                    href={'https://www.clickout.io/legal/privacy'}
                    target={'_blank'}
                    className={'link'}
                    rel="noreferrer"
                  >
                    Terms of use
                  </a>
                  .
                </label>
              </div>
              <div className="flex justify-between items-center">
                <Button
                  type={'submit'}
                  disabled={loading}
                  className={`w-full ${loginStyles.btnSubmit}`}
                >
                  Create Account
                </Button>
              </div>
            </form>
            <div className={'line-text mt-16 mb-6'}>
              <span>or</span>
            </div>
            <div>
              <Button
                variant={'outline'}
                className={loginStyles.googleSignin}
                icon={googleIcon}
              >
                Register with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Register.propTypes = {};

export default Register;
