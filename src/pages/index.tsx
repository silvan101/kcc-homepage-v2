import AppLayout from 'components/AppLayout'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'next-i18next'
import styled from 'styled-components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Banner from 'components/home/Banner'
import Ecosystem from 'components/home/Ecosystem'

const AppWrap = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  background: #000;
`

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'], null, [
        'en',
        'zh-TW',
        'zh-CN',
        'es-ES',
        'pt-BR',
        'de',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function Home() {
  return (
    <AppWrap>
      <Head>
        <title>KCC Official Homepage - KuCoin Community Chain</title>
        <meta
          name="description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
      </Head>
      <Banner />
      <Ecosystem />
    </AppWrap>
  )
}

Home.getLayout = function getLayout(page: NextPage) {
  return <AppLayout>{page}</AppLayout>
}
