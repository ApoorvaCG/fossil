import { Container, Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { deviceSizes } from "../scripts/constants";
import consultation from "../media/svg/consultation.svg";
import concept from "../media/svg/planning.svg";
import planning from "../media/svg/tools.svg";
import management from "../media/svg/management.svg";
import handover from "../media/svg/handoverKey.svg";
import maintenance from "../media/svg/maintenance.svg";

const ProcessContainer = styled.section`
  padding: 32px;
  background-color: #fdfdfd;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${deviceSizes.mobileS} {
    height: calc(100vh - 100%);
  }
`;
/* 
  @media ${deviceSizes.mobileM} {
    min-height: 280vh;
    max-height: 300vh;
  }
  @media ${deviceSizes.mobileL} {
    height: 220vh;
  }
  @media ${deviceSizes.tablet} {
    min-height: 90vh;
    max-height: 100vh;
  }
  @media ${deviceSizes.laptop} {
    min-height: 80vh;
    max-height: 100vh;
  } */
const ProcessSection = styled.section``;

const Title = styled.h1`
  margin: 40px 16px;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.025em;
  text-transform: capitalize;
  font-size: clamp(2rem, 8vw, 4rem);
`;

const Card = styled.div`
  padding: 8px;
  text-align: center;
`;

const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
  grid-gap: 40px;
  margin-bottom: 12px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Process = () => {
  return (
    <ProcessContainer id="how-it-works">
      <ProcessSection>
        <Title>how it works</Title>
        <Container>
          <FooterRow>
            <FooterColumn>
              <Card>
                <img alt="services" src={consultation} height="50px" />
                <Box my={2} />
                <h3
                  style={{
                    fontSize: "1.7em",
                    fontFamily: "DM Sans,sans-serif ",
                  }}
                >
                  1. Initial Consultation
                </h3>
                <Box my={2} />

                <p>
                  Preliminary client meeting is the most important step of our
                  professional relationship.
                </p>
              </Card>
            </FooterColumn>
            <FooterColumn>
              <Card>
                <img alt="services" src={concept} height="50px" />
                <Box my={2} />
                <h3
                  style={{
                    fontSize: "1.7em",
                    fontFamily: "DM Sans,sans-serif ",
                  }}
                >
                  2. Concept & Design
                </h3>
                <Box my={2} />
                <p>
                  Space planning ensures you get the most out of every square
                  foot of space!
                </p>
              </Card>
            </FooterColumn>
            <FooterColumn>
              <Card>
                <img alt="services" src={planning} height="50px" />
                <Box my={2} />
                <h3
                  style={{
                    fontSize: "1.7em",
                    fontFamily: "DM Sans,sans-serif ",
                  }}
                >
                  3. Implementation
                </h3>
                <Box my={2} />
                <p>
                  We offer complete Residential and Commercial Interior Design
                  Service Solutions with proven design process
                </p>
              </Card>
            </FooterColumn>
            <FooterColumn>
              <Card>
                <img alt="services" src={management} height="50px" />
                <Box my={2} />
                <h3
                  style={{
                    fontSize: "1.7em",
                    fontFamily: "DM Sans,sans-serif ",
                  }}
                >
                  4. Management
                </h3>
                <Box my={2} />
                <p>
                  We lead the work under given constraints and complete the
                  project on time and on budget, you can be sure that we’ll
                  stick to our word
                </p>
              </Card>
            </FooterColumn>
            <FooterColumn>
              <Card>
                <img alt="services" src={handover} height="50px" />
                <Box my={2} />
                <h3
                  style={{
                    fontSize: "1.7em",
                    fontFamily: "DM Sans,sans-serif ",
                  }}
                >
                  5. Handover
                </h3>
                <Box my={2} />
                <p>
                  At Fossil, we take deadlines very seriously.so that your
                  organisation faces minimal disruption and can take occupation
                  on the agreed date.
                </p>
              </Card>
            </FooterColumn>
            <FooterColumn>
              <Card>
                <img alt="services" src={maintenance} height="50px" />
                <Box my={2} />
                <h3
                  style={{
                    fontSize: "1.7em",
                    fontFamily: "DM Sans,sans-serif ",
                  }}
                >
                  6. Follow up{" "}
                </h3>
                <Box my={2} />
                <p>
                  Our dedication towards the project does not end when the
                  contract finishes – FOSSIL helps with on-going maintenance and
                  support as required
                </p>
              </Card>
            </FooterColumn>
          </FooterRow>
        </Container>
      </ProcessSection>
    </ProcessContainer>
  );
};

export default Process;
