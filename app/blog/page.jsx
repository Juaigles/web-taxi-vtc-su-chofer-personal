import BlogArticle from '@/components/content/BlogArticle'
import GenericHero from '@/components/layout/GenericHero'
import React from 'react'

const blog = () => {
  return (
    <div>
        <GenericHero children="BLOG SU CHOFER PERSONAL" imgUrl="contacto"/>
        <BlogArticle/>
    </div>
  )
}

export default blog