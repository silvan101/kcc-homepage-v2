import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { RowCenterBox } from 'components'
import arrowDown from 'assets/images/Icons/arrow-down.webp'
import Image from 'next/image'
import { KCC } from 'constants/index'

const Wrap = styled.div`
  width: 100%;
`

const TitleBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #ffffff;
`

const ListWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`
const Item = styled.div`
  width: 384px;
  & + & {
    margin-left: 24px;
  }
`
const ItemTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #040a2d;
  height: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  margin-top: 16px;
`

const DateText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #7f8393;
  margin-top: 16px;
`

const StyledImage = styled(Image)`
  border-radius: 12px;
  cursor: pointer;
`

const newsList = [
  {
    id: '0',
    url: '',
    image: require('../../assets/images/home/news1.png').default,
    title:
      'Torches Announces Strategic Investment by KuCoin,c Investment by KuCoinc Investment by KuCoinc Investment by KuCoin ',
    date: 'Jul 12.2020',
  },
  {
    id: '1',
    url: '',
    image: require('../../assets/images/home/news2.jpg').default,
    title:
      'Torches Announces Strategic Investment by KuCoin,c Investment by KuCoinc Investment by KuCoinc Investment by KuCoin ',
    date: 'Jul 12.2020',
  },
  {
    id: '2',
    url: '/apps',
    image: require('../../assets/images/home/news3.jpg').default,
    title:
      'Torches Announces Strategic Investment by KuCoin,c Investment by KuCoinc Investment by KuCoinc Investment by KuCoin ',
    date: 'Jul 12.2020',
  },
]

const NewsList: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <Wrap>
      <TitleBar>
        <Title>{t('News')}</Title>
        <RowCenterBox
          style={{ width: 'auto', cursor: 'pointer' }}
          onClick={() => window.open(KCC.NEWS_URL, '_blank')}
        >
          <Title style={{ marginRight: '5px' }}>{t('More')}</Title>
          <Image src={arrowDown} width={24} height={24} alt="arrow-down" />
        </RowCenterBox>
      </TitleBar>
      <ListWrap>
        {newsList.map((news) => {
          const newTitle =
            news.title.length < 54
              ? news.title
              : news.title.slice(0, 54) + '...'
          return (
            <Item key={news.id}>
              <StyledImage
                src={news.image}
                width={384}
                height={220}
                alt="news-thumbnail"
              />
              <ItemTitle>{newTitle}</ItemTitle>
              <DateText>{news.date}</DateText>
            </Item>
          )
        })}
      </ListWrap>
    </Wrap>
  )
}

export default NewsList
