"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { useRouter } from "next/router"
import { useRef } from "react"

export default function Login() {
    const {toast} = useToast()
    const email = useRef(null)
    const pass = useRef(null)
    const login = async () => {
        if(email.current.value == '') return toast({description: 'Email Wajib di isi', variant: 'destructive'})
        if(pass.current.value == '') return toast({description: 'Password Wajib di isi', variant: 'destructive'})
        const formBody = new FormData()
        formBody.append('email', email.current.value)
        formBody.append('pass', pass.current.value)
        const res = await fetch('http://localhost/cdn/main/login', {
            method: 'POST',
            body: formBody
        })
        const data = await res.json()
        if(data.success == false) return toast({description: data.message, variant: 'destructive'})
        sessionStorage.setItem('access_token', data.access_token)
    
        // useRouter().push('/')
    }
    return (
        <>
            <Toaster/>

            <div className="flex justify-center md:px-30 sm:px-30 lg:px-80 pt-12">
                <Card className="w-96 shadow-2xl">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Login an account</CardTitle>
                        <CardDescription>
                            Enter your email below to Login your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input ref={email} id="email" type="email" placeholder="m@example.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input ref={pass} id="password" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" onClick={login}>Login account</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="flex justify-center md:px-30 mt-4">
                <p style={{fontSize: 13}}>Don't have an Account? <Link href="/auth/register" className={buttonVariants({variant:'link'})} >Create</Link></p>
            </div>
        </>
    )
}