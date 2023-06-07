import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, TwitterIcon, DribbbleIcon } from './Icon'
import { motion } from 'framer-motion'



function CustomLink({ href, tittle, className = "" }) {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {tittle}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full
       transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>)
}

const NavBar = () => {
  return (
    <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
        <nav className='flex justify-center items-center flex-wrap'>
            <CustomLink href='/' tittle="Home" className='mr-4'></CustomLink>
            <CustomLink href='/about' tittle="About" className='mx-4'></CustomLink>
            <CustomLink href='/projects' tittle="Projects" className='mx-4'></CustomLink>
            <CustomLink href='/articles' tittle="Articles" className='ml-4'></CustomLink>
            
        </nav>whileHover={{y:-2}} className='w-6 mr-3' 
        <nav>
            <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-6' href='/' target={'_blank'}><GithubIcon/></motion.a>
            <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-6' href='/' target={'_blank'}><LinkedInIcon/></motion.a>
            <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-6' href='/' target={'_blank'}><TwitterIcon/></motion.a>
            <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 ml-6' href='/' target={'_blank'}><DribbbleIcon/></motion.a>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[50%]'>
            <Logo />
        </div>
    </header>
  )
}

export default NavBar