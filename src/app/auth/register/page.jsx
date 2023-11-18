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
import Link from "next/link"

export default function Register() {
    return (
        <>
            <div className="flex justify-center md:px-30 sm:px-30 lg:px-80 pt-12">
                <Card className="w-96 shadow-2xl">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Register an account</CardTitle>
                        <CardDescription>
                            Enter your email below to Register your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Username</Label>
                            <Input id="email" type="text" placeholder="example" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Register account</Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="flex justify-center md:px-30 mt-4">
                <p style={{fontSize: 13}}>Have an account? <Link href="/auth/login" className={buttonVariants({variant:'link'})}>Login</Link></p>
            </div>
        </>
    )
}