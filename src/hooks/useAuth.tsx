'use client'
import user from '../services/user'
import { AuthContextI } from '../interfaces/UseAuth'
import { UserSignInI, UserSignUpI } from '../interfaces/UseAuth'
import React, { useCallback, useState, createContext, useContext, ReactNode } from 'react'
import execute from '../filter/allExceptionFilter'

const defaultAuthContextValue: AuthContextI = {
  error: '',
  success: '',
  loading: false,
  signIn: async () => {},
  signUp: async () => {},
  getMe: async () => {},
};

const AuthContext = createContext<AuthContextI>(defaultAuthContextValue)

export const AuthProvider = ({ children }): ReactNode => {
	const [error, setError] = useState<string>('')
	const [success, setSuccess] = useState<string | Record<string, string>>('')
	const [loading, setLoading] = useState<boolean>(false)

	const getMe = useCallback(async () => {
		setLoading(true)
		execute<Record<string, string>>(setSuccess, user.me, setError).finally(() => setLoading(false))
	}, [])

	const signUp = useCallback(async (data: UserSignUpI) => {
		setLoading(true)
		execute<string>(setSuccess, () => user.signUp(data), setError).finally(() => {
			setLoading(false)
			setTimeout(() => window.location.replace('/auth/sign-in'), 1000)
		})
	}, [])

	const signIn = useCallback(async (data: UserSignInI) => {
		setLoading(true)
		const saveToken = (response: Record<string, string>) => {
			localStorage.setItem('token', response.token)	
			setSuccess(response.token)
		}
		await execute<Record<string, string>>(saveToken, () => user.signIn(data), setError).finally(() => {
			setLoading(false)
			setTimeout(() => window.location.replace('/'), 1000)
		})
	}, [])

	return (
		<AuthContext.Provider value={{ error, success, loading, signIn, signUp, getMe }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
