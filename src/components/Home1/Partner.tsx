import { RowCenterBox } from 'components'
import { KCC } from 'constants/index'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'
import styled from 'styled-components'
import { useResponsive } from 'utils/responsive'

const Wrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: #f5f5f5;
  padding: 190px 0 135px 0;
`

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #040a2d;
`
const ImageWrap = styled(Link)`
  background: #ffffff;
  border-radius: 12px;
  width: 247px;
  height: 194px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  margin-left: 24px;
  &:hover {
    transform: translateY(-10px);
  }
`

const StyledMarquee = styled(Marquee)`
  margin-top: 38px;
`

const Partner: React.FC = () => {
  const { t } = useTranslation()
  const { isMobile } = useResponsive()
  const [isHover, setIsHover] = React.useState<boolean>(false)

  return (
    <Wrap>
      <Content>
        <Title>{'Partners'}</Title>
        <StyledMarquee
          direction="right"
          speed={50}
          gradientWidth={0}
          play={isHover ? false : true}
        >
          <RowCenterBox
            style={{ width: '100%', padding: '40px 0' }}
            onMouseEnter={() => setIsHover(() => true)}
            onMouseLeave={() => setIsHover(() => false)}
          >
            {KCC.PARTNER_LIST.map((partner, index) => {
              return (
                <ImageWrap href={partner.route} target="_blank" key={index}>
                  <Image src={partner.logo} alt={partner.name} />
                </ImageWrap>
              )
            })}
          </RowCenterBox>
        </StyledMarquee>
      </Content>
    </Wrap>
  )
}

export default Partner