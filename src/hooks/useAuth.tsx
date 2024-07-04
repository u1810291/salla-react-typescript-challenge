'use client'
import user from '../services/user'
import React, { useCallback, useState, createContext, useContext, ReactNode } from 'react'
import { UserSignInI, UserSignUpI } from '../interfaces/UseAuth'
import { AuthContextI } from '../interfaces/UseAuth'

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
	const [success, setSuccess] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	const getMe = useCallback(async () => {
		setLoading(true)
		try {
			const me = await user.me()
			setSuccess(me.data)
		} catch(error) {
			setError(error.response?.data || error.message)
			console.error(error)
		} finally {
			setLoading(false)
		}
	}, [])

	const signUp = useCallback(async (data: UserSignUpI) => {
		setLoading(true)
		try {
			const register = await user.signUp(data)
			setSuccess(register.data)
			setTimeout(() => window.location.replace('/sign-in'), 2000)
		} catch(error) {
			setError(error.response?.data || error.message)
			console.error(error)
		} finally {
			setLoading(false)
		}
	}, [])

	const signIn = useCallback(async (data: UserSignInI) => {
		setLoading(true)
		try {
			const login = await user.signIn(data)
			localStorage.setItem('token', login.data?.token)
			setSuccess(login.data)
			console.log(login.data)
			// setTimeout(() => window.location.replace('/'), 2000)
		} catch (error) {
			setError(error.response?.data || error.message)
			console.error(error)
		} finally {
			setLoading(false)
		}
	}, [])
	return (
		<AuthContext.Provider value={{ error, success, loading, signIn, signUp, getMe }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
