'use client'
import { Button, buttonVariants } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ArrowBottomLeftIcon, ArrowLeftIcon, CopyIcon, EyeOpenIcon, PlusIcon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';

export default function Home() {
    const [slug, setSlug] = useState('')
    const onCreateNewCdn = async () => {
    
    }
    
    return (
        <main className="min-h-screen md:px-30 sm:px-30 lg:px-80 pt-12">
            <div className="fixed left-0 top-0 flex w-full justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 px-5">
                <DropdownMenu >
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="/avatar.jpg" alt="Profile" />
                            <AvatarFallback>Profile</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mx-5">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem style={{ cursor: 'pointer' }}> <Link href="/profile">Profile</Link> </DropdownMenuItem>
                        <DropdownMenuItem style={{ cursor: 'pointer' }}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="default">Create A New CDN <PlusIcon className="ms-2" fontWeight={700} /></Button>
                    </DialogTrigger>
                    <DialogContent className="w-[80%] sm:max-w-[425px] rounded-lg">
                        <DialogHeader>
                            <DialogTitle>Create A New CDN</DialogTitle>
                            <DialogDescription>
                                Create A New CDN for boost your load
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" className="col-span-3" onChange={(e) => {
                                    const value = e.target.value
                                    setSlug(value.replace(' ', '-'))
                                }} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="slug" className="text-right">
                                    Slug
                                </Label>
                                <Input id="slug" className="col-span-3" readOnly={true} value={slug} />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogPrimitive.Close onClick={() => setSlug('')} className={buttonVariants({ variant: 'destructive' })}><Button>Close</Button></DialogPrimitive.Close>
                            <Button type="submit" onClick={onCreateNewCdn}>Create</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="mt-20 px-5 md:mt-20 lg:mt-10">
                <div className="card">
                    <Table>
                        <TableCaption>A list of your recent cdn.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">No</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Size</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">1</TableCell>
                                <TableCell>Testing Name CDN</TableCell>
                                <TableCell>100KB</TableCell>
                                <TableCell className="text-right">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline">Show Detail</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[1028px] w-[80%] rounded-lg">
                                            <DialogHeader>
                                                <DialogTitle>Detail Testing Name CDN</DialogTitle>
                                            </DialogHeader>
                                            <ScrollArea className="h-96 w-full rounded-md border p-4">
                                                <Table>
                                                    <TableCaption>A list of your recent cdn files.</TableCaption>
                                                    <TableHeader>
                                                        <TableRow>
                                                            <TableHead className="w-[100px]">No</TableHead>
                                                            <TableHead>Name</TableHead>
                                                            <TableHead>Size</TableHead>
                                                            <TableHead className="text-right">Actions</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell className="font-medium">1</TableCell>
                                                            <TableCell>Testing Name CDN</TableCell>
                                                            <TableCell>100KB</TableCell>
                                                            <TableCell className="text-right">
                                                                <Button variant="outline" className="me-3"><span className="me-2">Copy Link</span> <CopyIcon /></Button>
                                                                <Button variant="outline"><span className="me-2">Preview</span> <EyeOpenIcon /> </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                                <ScrollBar orientation="horizontal"/>
                                            </ScrollArea>
                                            <DialogFooter>
                                            <DialogPrimitive.Close onClick={() => setSlug('')} className={buttonVariants({ variant: 'destructive' })}><Button>Close</Button></DialogPrimitive.Close>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </main>
    )
}


