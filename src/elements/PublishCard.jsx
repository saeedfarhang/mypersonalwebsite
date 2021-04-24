import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
const Container = styled.div`
  min-width: 260px;
  max-width: 260px;
  width: 100%;
  min-height: 230px;
  box-shadow: 0 0 10px #00000016;
  background-color: #242424;
  @media screen and (max-width: 380px) {
    min-width: 260px;
    max-width: 350px;
  }
  @media screen and (max-width: 540px) {
    min-width: 200px;
    max-width: 230px;
  }
  @media screen and (max-width: 640px) {
    min-width: 200px;
    max-width: 230px;
  }
  .p-thumbnail {
    width: 100%;
    /* height: 145px; */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .p-title-container {
    margin: 14px 15px 20px 15px;
    direction: rtl;
    .p-title-seperator {
      width: 37px;
      height: 2px;
      background-color: #fff;
      margin-top: 5px;
    }
  }
  .p-tech-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    .p-detail {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5px;

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export default function PublishCard(props) {
  return (
    <Container>
      <div className="p-thumbnail">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRISERgYHBUYGBISEhEREhgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmLDAxNjU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjYjISE0NDQxNDU0ND80MTQ0NDQ0MTQ0NDE0NDY1MTE0NDQ0NDQ0NDQ0NDQ0NDY2MTQxNDQ0Nf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xAA6EAACAQMCAwYEBAUEAgMAAAABAgADESESMQQFQSJRYXGBkQYTscEyQqHwFVJy0eEUI2KCkrIkQ6L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQACAgEDBAEDAwUAAAAAAAAAAQIRAxIhMQRBUWGBE3GxIkLwBTKRocH/2gAMAwEAAhEDEQA/APIBIGjM06cygkwUjnsWftA0XvNBSQJDUFmZ0lCaSt4kpGpAmCBIBDVJLR2FidMGOO3vA05lWMJJoTY+X3mZY0bDzP2ksTGEfaA8vXB3kgLIizHMMQCk0TGhZMdSFx7/AEi9MNWt7D6QGyXhqIlZopC8TRLNCYAgtkQ1WQrYSGxCLQ2GYVoBMAAeDqlVDmBeUkUNVt4tjKEhOB6ykgAY4lK0kphmOhmmk98S2mdHsYav+/WTpFRckp3zJKodG8LKIjJdsTmMhF5IRFveURGANoBjXGIpd40NBKJRSXeFC6AVowYsr18Zo0ynSNSGmZykYoxGFJNEeoLE6cw1WGaf79JQisLFuOkC+DHP3xWmUmNAWktHfLlMkdhYq31jqOIurv6wkO0bdjNy2gVGtFF4p3vI0k0Gz3z5RZeKLyMdpaiVQ12x6xF5ciiVQFrIReVbMZaIAEWUywpbCACTIsYySgkdjKvJL0yR2B0VN/0jgsFEh3nJZkJdYJOIxmgERgC+3tMhvNj7RNsS4lIGkd45RFotjHgRSYmVaWBLkkiLIi2jjFGAAhpRHZ/f76SMISi8tDFqIB3j2WIdYJjQwHaQLLS140LiDExGmAyWmnTAcRqQJmVniWePqiZXmsdzREDQmMC8pzvLoqhivGrEIcR6SGSwgtz7QgM/r+sYqbS9ODM7JszkQgLn2jHWDt+kpMLCdYqG5lWzHYwNMkfiSAWdBsRbmEz3i2nKYgGQy9MkooB2goJKkEG0pIYxYZaILSaoaQobeGIpYxTFQi2i6hz7fSMUxb5MQEEYqwEEdE2Jg6cRWnPofpNBGIBWNSGmLppGiRBaWdo3IGwTM7maGEU6RRYIyu0y1Mmba6YmMCxnTE1iAgyfCRllKYbbzQooR1IwGXAPnLWTJCZtR5Km0UjdkeZ+0PXewmbiRRSyMMQS9jCLfSKgoWDvKLSr/eWoxLoqg9Mku0qTYjeVzC0TQ9EqSDggkEeINjLCTmMxGmJqLNjpEMhJAALE2AAFySeggthIyOIu06XMeXPR069ALg2VW1MLDN8WHSc5+kuMlJXF2i6BjEG0ErHIJTYmWqZHnCGCPOWptKtken1iTELLRdWsqjUxsJbnSCTsJ1fgnkY42s1SoA1KlYaG2dzlQR1AGT5iRlnHHB5JcL/fo0x49ToRy7lHG1lDLQVEI1K1aotPUvQhctY99p7PhvgqkUVm4hySAeyiAC4vbJN5OdcIyFuIYBmpK2g62VcgqpZRg2vv4Rf+tZQAHYAWAyRtieS/6hKS1JKn47ejphghKWmTUfbD4j4Gv+DiR4K9Ow/8lJ+k4XH/AA7xFDtPT1IN3pnWg87ZX1AnoaPOKg66xvm17CdThOfrcB+wc742wZUOtly06Fk6ZR4aftM+Zyp6/wCKOAov26QVH3ZUsFbrcr0PiPUdR5Az0YvVFS8nNPHKCTfD4Lg7mWdvWCPtLRmhbpMTJn1m4NMrkZm0DWJiqpaCIysMxbTcsZfHvJeUpltAQWvpBSpYwGMUcmFBRp13MZrxMamFqioKH3jUbFvKZbxqNFJAzXpki9ckzomj2KMtcBWslT8r2sr/APFvHx/ZwVKLIxVhpI6RYnf4dxXQXt8xLWY7HzHUHrOHI/pPV+38Er9X3OGyzscl4HSPmsMm4TwHVvX6ecztwBauEA0hrH+ldz9/0noKpCkKALDYdMeE5euzpY1GPf8AA4Rtni+b1TVqM17gdlfIfsn1nN+V+/SdrmHEfMctgAYUKAot328d4PD8rqOLqlh/MxCL7nf0nbiqEEntSJfO25yGT9+ksrNvE8KUwWRj3Iwe3naI0zRNS3RLFIsb8uGE28vuY0WAJOwBJ8gM/SNDONxatUqJw9MandkW18anwoPcOpPdPtXwz8PJwfDrRU62uWepa2t23NugwAB3AT5F8AOH5pTdj0rOP6vlsAPYn2E+4LXnL12WMUscuOTuxQaWxn47g1dHRgCrqysD1DCxnzn4ho/6dgiVGc2uVcKwUHa7fiv6z6gal583+NuHC8SWH50Rj5i6fRROLpccJZK7eB5708Hnl49h0HoSI/8AixIsy6h4m/72mQ04Pyp6kMcMbuKPOkr/AJQvjuKcEMnzLYOGBI9OsL5mrtWsTv5wzTlMTgHpgbbXJ+pMpy7HZPqnkxaJq2qp99gScSusMiLaCORCWSZKwtNdR7TI73m8DWIiobkyrSNKvNmyxj7+n+Zdsen3gBv36QnP2iQhTCUBYywf35CC7SkMHrCJgqJTCMA1MJWgdZZEloBweXEapIqFR7yhwKNg1qanFtyPc2jjw78O4LDBxcfhI8/1mBDOxywrUvTfJ02RuthnT9xPPyRlpak7TM402dThimX/ADabemTb9+E53Es73VAWZsDuA6knpi8HhnPaW99wSPA2h8RxZRLLbUx3tmw2/X7TxoQc8qXNf84NnsjPT4ZaYJVVquty1SpYUUtuc727z3dJy+J4t6mWqaxt2WunpbEJna5JZiTubm5i9M9iEJJ3J2YtqqQkLKdM+00MsEpNiRInO+IeL0UrdX7Itvbr9p19M8j8U1dddKdwqqouxuQNRySB3ACXj3kXBWzHyDm54aulUC+gnb/kLH9CZ9h5X8SpVF0qK3/G9mHmJ8JZRYnx3jPmspFmK9ldiR+UTHq+hj1FNumjuhl0qj9FpzYW/wAzx3OeYrxNQupDIBoVhkEKTcjwvf0tPmScdWK6PmvZsaS5AN8ZuZ7rldEpSpqRYqqgjx05/WYYOg+g3Ju3wjLqMuqKSD+XJ8qaBLtOqjjMwpzO6zc6zHVEekkU0RUGfQfSNaKrb47h9BGikYuJeZbx/EIYlCVIINrHe2rHXHUeHWbxqjWIJaxB6jOdsRxAR0fJQlXU96hsjzFiD4iHxPDXBdMWy9MG+kH86H8yG++4vnoTODdWBpOQqNlah/8ArfYN/ScBvCx/KINpqyhHEUijlD0Nr946HyIsfWLYGwPQkgelif8A2E6PG0GalqYaXoH5VRTvozob0sVv3BYHG8G3zEooCW0qoB72ZnJPo2/cJMZpqnzvfwBgti9sbX6X7os5vOrzrhRR0Ub3ZQXcnB11LWUjpZFTHeTOVNYu1YBtvIN5SNmWYwIRuYAMvVuPL7yWsYDLtJCkgI9lxPDNTPa26ObAHbIztmHwvEBWVwwNipuD+/GeT4XnDPhrk5N+hK7alvkeEFK7I+kdvAwNR3HQ3/TacVSlceH+QWJH0Fl0M3QMTb3v95j4qoSwB3AF/Pcj0vb0mBOYsWT8NiFJu3SwLfrM9DmKuNRbtXNwSACb/lY7zjw49E3Kh5IuqR0SJNMzJxNgxawIJKjcFRsTfY/2jw5K69NgWIuAQuobgToWRN1x9zBxaL0yikJlYbgj99e6TVKTUladioDTPnfxIx/1NXzUemlf7CfRWafO/iJf/kVfNf1UGbY+TTFycrVDDXI9B7C0hXB9PrBQ5m5uanzYDchRjvsBPpIa1h5Tw/w7wYqVRe9k7Z8bEWHv9DPbsJlN70YZH2DV4YaIURqiQZls0xVjNdQTO6XicgMgltTjClpLSGwM1WniZGo9MepAHXqZ1GSZ6lPEuM2NSM3COFZUqakF+xUUf7iE9V/nQ3N18SRnc+M4EgkWXVpLAU806ib66f3Xpm21gC1XT8JxuVYBkPmpwZv4DiVqL8rSKT3L0aiMdC1BnSAblQ1tr2vbAg5NPUuO5qnZq+GnV2UuofAoVVOz02BNNj4gqUv3Mk7XK+ADcfUqsLKiUwrNtcrYt6Kje5nn+Vt8rikJQolUOrUzjQ43S3g6oR4FZ3ua13agKVFdT1Lp2bbEnUSegC6hc4GqcXUSazJR2Ul/jyUjwvOeO+dXqVBs7sV/pGE//IEzUKLubIjOe5FZz7Cej/h/DcN2HDcbX606YLU0PcR1/wCwP9MTxPHcSRpHDfLTonyHZR6MNI9FE71m2SgtvL2QHLpcrqE2sFI3BOpx5ol2HqIFeiq4vqbqQw0j2vf3HlD4jiazCztU0/ym6J/4iy/pM6maR1PeTXwIWRmWN5DvLImiAZokitRkjACrwBpg3Ra2Aww4tfvsw1Dw/wAg5V5xUC6QUXcdmlRSwxcCyXHneenanncjf6YnL4zgVY76b72tm2xz5mc8b/duOMzOnHBhYAqbrdg1wb7WDfhyB1tAfjbu2oaTgabhQCoAN7nBNh/mM/0CWIOo33sBuL/pt7S+J4Is2pCEwBpYGxIOcx0rspys28u4tSbVNTA4DdoG5PRuu/lnrPScz4qgiItEMtzc0yx0npgdDe+Z4qtRq01XSSTpOtcGw65Pdc+8RUqOUV2dc9nSey+MXC/mFuov4yNKk/Q01VHq63NHYsKZLAZVagS4t0NtzY9IHAcxfXd6bFCMqrBGOMFbg4x3H+3EoK4pmrYMlyD33ABI/fdMy83dcXHU9pRcGxsLi1+kyeHtFKkS1Z7ZuLpsABhiSBm4I8xjqNpx3+HjxPEtnSmhWd8BrgFQFuMkkLnoDOG/FOoVw4Ia7C3QqRi3Tce4m3hueBQO2AxAFzi17Fhjpv6gS4RlBp8ruS41wcGvwjqWQowIJUg9CDteJXhH6IxPcBcz1tDmIAfUA+sG5Nj1N2GfERnBU7uCqX3YAFQbW3/UfvEt5ZW0lsdUPotPVafrgP4Z5eaVLW1tT72INguynuObkeM7JM08Oq0rtUS6uVUrbDEmw0kfmzjYxnEUBoV1AVCt7uwDA3ZWU+NxFkuk4q759HC4ycnaMYxaXqkenc9g6/DZvQHf0hjh3vp0m9ibHGLXvnwBPpFuxOLXYreCUjKaE7DV/T2vpLfs/iIW2TdlFvOSLS/Ahkg/Lj1AOzIfJlMIoEYhiuLgkMGXIxlTJtBpdmPRAde7fw3muoqCw1kmxJARrLboe/0mb+IqmFIRjftZ17XxcXUdLj3k6k1sr+BqErHLwHEEXNR6QtcfMqOl/ISqvJyReoyIcFOJp20atwHK4t44YeMzn4hNEqQ9VxaxVQWFxbshmtYdr9Js4X4vpEWam6avxa9BU+dj9pjP612lsu6N/p0uTqcz4cPTQuoRwyN2f51Cqc9xUtnuVT0l06hCsqEX2ze5IW+kAEFj4AjznJ4zm6llVCpXpdlVV8M/ht7Q24EMgZ/lltT2NZnang7oiYffdj9bTF45SmnLZI0cNjz3Hcye5VUKWJFqigsP+lgieQW/iYunzauBiq6+CHQPZbCegqBXH+8q1GVtPzGoBeyLroBDi6g5vvjuxM9Xk9J1LUw1PTbWquK2m4uCUvqAIB2LWttPQhOHDj80ZOLRyW5vxJAvWqN/UQ3XxmapxDt+J2Phew9hibX4S3VW8Vvb9QDBHCzZaF/akvgjUcxllOZ034SZ6nCy1JApI595Jr+RJHqRVnacXvMtZMR2qQi4mJknRgIIjErWxYH3H0jHSJKZvL5KTHOEbcd2Olgb28r2jFRNGgopGcDBN985tMFzHKxhpFuA3L0amEYsvWysQAc5sMFrYuZza/KO2FWppVrdrSGOB3Y7p19RhIlzJprhlKTR52vy10Ufhe+q+knFjne3d9YPD0daMLBXUqNWNL3NrHxGJ6d6AYEEAjumTmFIJRfSoWym1gBa8dtlKZy6tB6TFGIJtqsL4Ude4DcQV4xhpOog74uLHYzLR5iysrsA57SsTuy2GD7zPTqgkBjYDF8kARpPuWej4bnjhR2i1jsRchji+cWiuJ46ooQ1NYuCwLHssCTnxsb+0ocsASm6AuH0FlbO9sWGSpO81NwNVj2r0wC6fK1uVUq2cE7MQdvCS3peyE5mehzJ0YsLs2381u8nGRjrNic5rBy6vodbEl1VgpvbIPsRkGZX5K/So1r3sT34tj0xF1+T1RvUDnc6Sb46nHahrT9BrT7nUTjAzayAmoG5Ts9onJAHQ39InjOJCHDX8c39xbM57curhgmqn4ENdbYtcgHwl8Ry3iQDcLa4Fg4bUTjA94bc2W5Rqi6nMmUizHzazW8v8eMg5/U1AaVZb7G97WtjxG4JvMFbl9RXCOArEKfBQbgE28QZtq/DvEKBpVHufyONQv1N7C3rE4QbtkWkaqXPyGDWZjswqBCNrYOQcXtgfeaeO5mjIGOk6rG5XtLk4/T9Z56pwrJq1KQAdJNtQDDcX2veHw2tgURRUvZiLG/YINx7W64aChFU4lJ19jdx3MhqUFfyi66cLqJJsO/SReZRzEAsVUC/4BoDWGx28vczT/C2qB3Ysls7bk7g32G2Y3hfh3UAzvoscqASQtrixvvc7+UHpS3Jc0xC8WpS4AJIYsLi2tc/h3nY+Huamox4fW6rWUICxB0VSDoZelr2Uj82vO05HA8uLVGTViz6je9+gJAxqyY1+UvRamyuhIcFQCdVwVKscbAge8TUWqNNfY7nBc9K7uyOBZkVs3Fr4/6nvt5R38dRibknqAwBI3/Cd5xeb8kdq9V6bLZmaopN862LhB5XtOW/Kq6As4QBepf6AbxwqtmJzTe56vguecOrEOocHYGmGswIxq3se17jxnRTm3BMQGp001YW1Rwb9bgHHr3T5w1OppL/AC20jd7NpHmekPhteq5RlG93UlTtYdrB/wAS2thfp8H0ZK/CMbaWtYW01L5Pcf7xCpwr37VRBcgNrRhceGnw7/aeY5JxdN0emyH5hvpZEReoF79LWB9TFVqaj5qs7/7TFcAMr2BOeq48+szurTCoPsd35I/KCR0Opf7STk1q1dTZfw2GnSo06SARbPcRJMLl5QVHwjo1JWqXVWAqzqo5ggLy3pxlNIwiTwTZz2owkpTWVkCw1DsUtLMalKGohKIOQrJ8uZua0gaT+X3E3CDWphlK94IiT3GnueB/091A7ift/aKr8KROq6FWta3aIJPT065xKNMnpqHeN894nTR0WdXlNS1FATsLexM1HiCck38TvOZSfSoA/e8JX+0hxMmtzpDiZHrXFr28fXac+8gJi0i0m53uLAC5IF/M9TOitTxv4zjUzNlAzOUafoUuDoVEDjy/djNKAAADoJkpzQhmdK7Jvag9CkEFVIbcECx8++c3huWJScsikBwfHSbg2HcP7TpCWZVgpNCTBIjmSRkibAzLRXJCqD2TcKATbAuRI6A2JAJGx7vKN0wXElbDcmxDtF1XvggEdQciOZJldZcQItUbAADutiOqBXGlxqB6GY2p5jUBlbAxFD4f0PrFRNBDWVGLVBnZsYj6HJUUsSWcMblWtbwvYZtczXTeGXxBq9xuUmYanJqRN/8AcGALCo4GABjPhJNeqSIWp+TOFvLFOHTEaBG2KwEX9+kFhHhYtlisBQEu0mmGqxNgRFhhYSJGBYgAUSoUq0dAc/juWo5udQubnSbZ7/AzI3BKvVvW1/e07RWY+Ipy4yfkpSZyKi5xBRZoqUswUTM0suwQkeiR1OnHpTmbkS5GZac00llssimJuyGzYkYGEyh8QWqGTQG0vItSYGqSxVhQqOmGvCaYqVWPDyWhhmLeGWlQAWVimpzRAMAMzUpFpzYFxAdIWKzNeQiG6yKJdjAvJC0SQsBaxqySRsBvSDJJIBAmEJJI2JhrLWSSCEC0gkklFFjeIqSSRIDBV3iTKkllo1UZpEuSZy5IZTbRTSSRgQSpJIAC0hlyRgNpTQskkkA1hCSSQwIJGkkggCWRpJIwEVIsSSSgJJJJGB//2Q=="
          alt=""
        />
      </div>
      <div className="p-title-container">
        <Typography
          fontSize="12px"
          fontWeight="normal"
          lineHeight="20px"
          textAlign="right"
          direction="rtl"
        >
          چگونه از فیلان در ریاکت استفاده کنیم؟
        </Typography>
        <div className="p-title-seperator" />
      </div>
      <div className="p-tech-detail">
        <div className="p-likes p-detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.857"
            height="13"
            viewBox="0 0 14.857 13"
          >
            <path
              id="Icon_awesome-heart"
              data-name="Icon awesome-heart"
              d="M13.414,3.137A3.968,3.968,0,0,0,8,3.531l-.572.589-.572-.589a3.968,3.968,0,0,0-5.415-.395,4.167,4.167,0,0,0-.287,6.033l5.615,5.8a.91.91,0,0,0,1.314,0l5.615-5.8a4.164,4.164,0,0,0-.284-6.033Z"
              transform="translate(0.001 -2.248)"
              fill="none"
              stroke="red"
            />
          </svg>
          <Typography fontSize="11px" fontWeight="100">
            223
          </Typography>
        </div>
        <div className="p-playlist-count p-detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="13"
            viewBox="0 0 16 13"
          >
            <path
              id="Icon_awesome-list-ul"
              data-name="Icon awesome-list-ul"
              d="M1.5,3.375A1.5,1.5,0,1,0,3,4.875,1.5,1.5,0,0,0,1.5,3.375Zm0,5A1.5,1.5,0,1,0,3,9.875,1.5,1.5,0,0,0,1.5,8.375Zm0,5a1.5,1.5,0,1,0,1.5,1.5,1.5,1.5,0,0,0-1.5-1.5Zm14,.5H5.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,15.5,13.875Zm0-10H5.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,15.5,3.875Zm0,5H5.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h10a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,15.5,8.875Z"
              transform="translate(0 -3.375)"
              fill="#fff"
            />
          </svg>
          <Typography fontSize="11px" fontWeight="100">
            10
          </Typography>
        </div>
        <div className="p-duration p-detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
          >
            <path
              id="Icon_awesome-clock"
              data-name="Icon awesome-clock"
              d="M7.062.563a6.5,6.5,0,1,0,6.5,6.5A6.5,6.5,0,0,0,7.062.563Zm1.5,9.176L6.247,8.058A.317.317,0,0,1,6.119,7.8V3.393a.315.315,0,0,1,.315-.315H7.692a.315.315,0,0,1,.315.315V7L9.67,8.213a.314.314,0,0,1,.068.44L9,9.67A.317.317,0,0,1,8.559,9.739Z"
              transform="translate(-0.563 -0.563)"
              fill="#fff"
            />
          </svg>
          <Typography fontSize="11px" fontWeight="100">
            4:21:20
          </Typography>
        </div>
      </div>
    </Container>
  );
}
