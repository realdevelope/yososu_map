import React from "react";
import { Tabs, Tab, Row, Col, Nav, Card, Button } from 'react-bootstrap';
import "./info.css";
import imgA from './img_purpose_img01.gif';
import imgB from './img_purpose_img02.gif';
import imgC from './img_purpose_img03.gif';
import imgD from './img_purpose_img04.gif';
import imgE from './yososu_img02.jpeg';
import imgF from './yososu_img03.png';
import imgG from './yososu_img05.jpg';

const InfoPage = () => {

    return (
        <div>
            {/*네비게이션 시작*/}
            {/*네비게이션 끝*/}

            {/*탭 기능구현 내가한거 시작*/}
            <Tabs
                defaultActiveKey="meaning"
                transition={false}
                id="noanim-tab-example"
                className="my-3, justify-content-center"
            >
                {/*첫번째 탭 요소수 정의 시작*/}
                <Tab eventKey="meaning" title="요소수">
                    <Row>
                        <Col className="mb-5 ">
                            <h1 className="mt-5">요소수란?</h1>
                            <h5 className="mt-5">
                                디젤 차량에서 발생하는 질소산화물(NOx)을 정화시키기 위해 디젤 차량에 탑재된
                                SCR(Selective Catalyst Reduction, 선택적 촉매 감소기술)에 사용되는 물질을 말한다.
                                질소와 산소가 결합된 화합물인 질소산화물(NOx)은 미세먼지를 유발하는 것은 물론 비에 섞여 내리면 토양을 오염시킨다.
                                따라서 촉매를 통해 질소산화물을 화학 분해하는 SCR이 반드시 필요한데,
                                이 SCR의 핵심이 '<b>요소수</b>'이다.
                            </h5>
                        </Col>
                        <Col className="mb-5">
                            <img src={imgF} />
                        </Col>
                        <hr />

                        <Col xs={12} md={6} className="mt-5">
                            <img src={imgE} className="income_img"/>
                        </Col>

                        <Col xs={12} md={6} className="mt-5 yososu_reason_section">
                            <h1>요소수 품귀현상</h1>
                            <h5>
                                요소수 품귀 현상으로 평소 10리터에 1만원 하던 요소수가 최근에는 10만원을 지불해도 구하기 어려운 상황입니다.
                            자동차용 요소는 물론이고 심지어 농가마저도 요소 품귀에 현상에 따른 불안감이 극대화 되고 있습니다.
                            요소 대란으로 인해 비료 수급에 문제가 발생하고 비료값 인상으로 이어지고 있기 때문입니다.
                            요소수 품귀 현상이 장기간 지속된다면 화물 운송 차질로 인해 경제 전반에 심각한 악영향을 미칠 수 있습니다.
                            물류 산업 전체가 멈출 수 있으며, 이는 물가 상승의 직접적인 요인이 됩니다.
                            코로나19 팬데믹으로 전국민이 경제적 고충을 호소하고 있는 상황에 물류 대란과 물가 상승까지 덮친다면
                                헤어 나올 수 없는 위기에 빠질 수 있습니다.</h5>
                            <hr />
                            <h2>이유</h2>
                            <h5>
                                직접적으로 우리나라에서 쓰는 요소수의 97% 가량이 중국산인데 외교문제로 현재 호주산 석탄 수입을
                                중단한 중국이 요소수 생산이 줄어들어 한국으로의 요소수 수출량을 대폭 줄였기 때문입니다.
                                중국은 아예 요소수의 수출 검사를 의무화하기 까지 했기 때문입니다.
                            </h5>
                        </Col>
                    </Row>
                </Tab>
                {/*첫번째 탭 요소수 정의 끝*/}

                {/*두번째 탭 요소수 용도 시작*/}
                <Tab eventKey="purpose" title="용도" className="mt-5">
                    <h1 className="mt-5 mb-5 text-center">요소수 주요 용도</h1>
                    <Row>
                        <Col xs={6} md={3} className="m-0" >
                            <Card border="dark" style={{ width: '100%' }} >
                                <Card.Header>디젤차량</Card.Header>
                                <Card.Img variant="top" src={imgA} height={150} />
                                <Card.Body>
                                    <Card.Title>디젤차량</Card.Title>
                                    <Card.Text>
                                        주행동력(走行動力)으로 디젤기관을 탑재한 차량.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card border="dark" style={{ width: '100%' }} className="mt-5">
                                <Card.Header>건설기계/농기계</Card.Header>
                                <Card.Img variant="top" src={imgB} height={150} />
                                <Card.Body>
                                    <Card.Title>건설기계/농기계</Card.Title>
                                    <Card.Text>
                                        토목공사나 건축공사에 쓰이는 기계의 총칭.
                                        농업을 수행하는 데 필요한 모든 기계.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card border="dark" style={{ width: '100%' }}>
                                <Card.Header>선박</Card.Header>
                                <Card.Img variant="top" src={imgC} height={150} />
                                <Card.Body>
                                    <Card.Title>선박</Card.Title>
                                    <Card.Text>
                                        물에 떠서 사람 ·가축 ·물자를 싣고, 물 위로 이동할 수 있는 구조물.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={3}>
                            <Card border="dark" style={{ width: '100%' }} className="mt-5">
                                <Card.Header>산업</Card.Header>
                                <Card.Img variant="top" src={imgD} height={150} />
                                <Card.Body>
                                    <Card.Title>산업</Card.Title>
                                    <Card.Text>
                                        인간이 생계를 유지하기 위하여 일상적으로 종사하는 생산적(生産的) 활동.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
                {/*두번째 탭 요소수 용도 끝*/}

                {/*세번째 탭 요소수 수입현황 시작*/}
                <Tab eventKey="income" title="수입현황" >
                    <h1 className="mt-5 mb-3 text-center">요소수 최근 수입현황</h1>
                    <Row>
                        <Col className="mt-5 ms-5">
                            <img src={imgG} width={300} height={300} className="income_img2"/>
                        </Col>
                        <Col xs={12} md={6} className="mt-5">
                            <h6 className="mt-5">
                                한국에서 요소수는 롯데정밀화학, 휴켐스 등이 생산하고 있는데, 원료인 요소는 대부분 중국에서 들여온다.
                                중국은 전 세계 요소의 30%를 생산한다. 중국이 요소 수출을 가장 많이 하는 국가 순위를 보면 1위 인도, 2위가 한국이다.
                                한국에 수출하는 양은 56만4000톤, 중국 요소 수출 총량의 14%를 차지한다.
                                한국은 전체 필요 요소수 중 66.1%를 중국에서 수입한다.
                                특히 공업용 요소의 중국 수입 의존도는 지난해 80% 이상, 올해는 97.66%에 달한다.
                                요소수 대란은 전 세계적 상황이지만, 중국에 전적으로 의존했던 우리나라는 직격타를 맞았다.
                            </h6>
                            <h7 className="mt-5">
                                출처 : SBS 뉴스
                            </h7>
                            <hr/>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
            {/*세번째 탭 요소수 수입현황 끝*/}
            
            {/*탭기능 구현 내가한거 끝*/}



        </div>

    )
}

export default InfoPage
