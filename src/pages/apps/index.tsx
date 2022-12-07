import AppLayout from 'components/AppLayout'
import Banner from 'components/Apps/Banner'
import AppList from 'components/Apps/Apps'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { DappService } from 'api/dapp'
import { AppCategoryType } from 'components/Apps/types'
import { useAppCategoryList } from 'state/apps/hooks'
import { AppDispatch } from 'state'
import { updateAppCategoryList } from '../../state/apps/actions'
import { useDispatch } from 'react-redux'

const AppWrap = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  background: #f5f5f5;
  height: 100%;
`

// export const getServerSideProps: GetServerSideProps<{
//   categoryList: AppCategoryType[]
// }> = async ({ res }) => {
//   res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=1000, stale-while-revalidate=10000'
//   )
//   try {
//     const response = await DappService.categoryList()
//     return {
//       props: {
//         categoryList: response.data.data.list ?? [],
//       }, // will be passed to the page component as props
//     }
//   } catch (e) {
//     console.log(e)
//     return {
//       props: {
//         categoryList: [],
//       }, // will be passed to the page component as props
//     }
//   }
// }

function Apps() {
  const appCategoryList = useAppCategoryList()
  const dispatch = useDispatch<AppDispatch>()

  React.useEffect(() => {
    async function updateList() {
      const response = await DappService.categoryList()
      dispatch(updateAppCategoryList({ list: response.data.data.list }))
    }

    if (appCategoryList.length < 1) {
      updateList()
    }
  }, [appCategoryList, dispatch])

  return (
    <AppWrap>
      <Head>
        <title>KCC Official AppsPage - KuCoin Community Chain</title>
        <meta
          name="description"
          content="KCC is a high performance decentralized public chain built by the fans of KCS and KuCoin. We aim to provide community users with faster, more convenient and low-cost experience."
        />
      </Head>
      <Banner />
      <AppList categoryList={appCategoryList} />
    </AppWrap>
  )
}

Apps.getLayout = function getLayout(page: NextPage) {
  return <AppLayout>{page}</AppLayout>
}

export default Apps
