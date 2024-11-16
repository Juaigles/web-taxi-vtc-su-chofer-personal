import BlogArticle from '@/components/content/BlogArticle'
import GenericHero from '@/components/layout/GenericHero'
import React from 'react'

export const metadata = {
  title: "Blog || ¿Qué es un TAXI/VTC?",
  description: "Blog personal de la web de Su chófer Personal, donde respondemos dudas frecuentes como ¿qué son las VTC?",
};

const blog = () => {
  return (
    <div>
        <GenericHero imgUrl="contacto">BLOG SU CHOFER PERSONAL</GenericHero>
        <BlogArticle/>
    </div>
  )
}

export default blog