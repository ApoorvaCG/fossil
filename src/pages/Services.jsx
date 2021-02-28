import { Container, Typography, Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import bookshelf from "../media/svg/studyingNew.svg";
import livingRoomBG from "../media/svg/livingRoomtv.svg";
import bathRoomBG from "../media/svg/bathroom.svg";
import entertainmentBG from "../media/svg/movie.svg";
import planBG from "../media/svg/plan1.svg";
import plan from "../media/svg/plan.svg";
import kitchen from "../media/svg/kitchen1.svg";
import kitchenBG from "../media/svg/kitchen2.svg";
import ideaBG from "../media/svg/idea1.svg";
import dressroom1 from "../media/svg/dressroom1.svg";
import dressroom2 from "../media/svg/dressroom2.svg";
import bedroom1 from "../media/svg/bedroom.svg";
import designService from "../media/svg/designService.svg";

const ServiceContainer = styled.section`
  padding: 32px;
  margin: 0px 32px;
  @media screen and (max-width: 768px) {
    height: calc(100vh - 100%);
  }
`;

const ServicesSection = styled.section``;

const Title = styled.h1`
  margin: 40px 16px;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.025em;
  font-size: clamp(2rem, 8vw, 4rem);
  text-transform: capitalize;
`;

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",

  [`&:hover`]: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "25px",
    transform: "translate3d(0,1px,1px)",
    transition: "transform 1s ease",
    backgroundImage: (props) => {
      return (
        `url(${props.picture})` ||
        `url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/interior-design-hbx030120raji-009-copy-1580424230.jpg')`
      );
    },
  },
});

const CardBody = styled.div({
  textAlign: "center",
});

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
  transform: "translate3d(0,10px,0)",
});

const CardTitle = styled.div({
  fontFamily: "Helvetica",
  transform: "translate3d(0,10px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.p({
  transform: "translate3d(0,10px,0)",
  transition: "transform 350ms ease",
});

const Card = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
  height: " 300px",
  width: "300px",
  transition: "background-color 350ms ease",
  borderRadius: "25px",
  background: "#fdfdfd",

  [`:hover ${CardTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
    visibility: "hidden",
  },
});

const Services = () => {
  return (
    <ServiceContainer id="services">
      <ServicesSection>
        <Title>what we offer</Title>
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card>
                <DisplayOver picture={livingRoomBG}>
                  <CardBody>
                    <CardTitle>
                      <img
                        alt="services"
                        src={entertainmentBG}
                        width="200px"
                        height="100px"
                      />
                      <Typography variant="h5">Entertainment Units</Typography>
                      <Box mb={2} />
                      <Paragraph>
                        A soothing design for your entertainment units, TV Back
                        panelling, Bookshelf
                      </Paragraph>
                    </CardTitle>
                  </CardBody>
                  <Hover></Hover>
                </DisplayOver>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card>
                <DisplayOver picture={kitchenBG}>
                  <CardBody>
                    <CardTitle>
                      <img
                        alt="services"
                        src={kitchen}
                        width="210px"
                        height="110px"
                      />
                      <Typography variant="h5">Modular Kitchen</Typography>
                      <Box mb={2} />
                      <Paragraph>
                        Modular kitchens, crockeries unit, Countertops,
                        Backsplashes, Shutters, Storage
                      </Paragraph>
                    </CardTitle>
                  </CardBody>
                  <Hover></Hover>
                </DisplayOver>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card>
                <DisplayOver picture={ideaBG}>
                  <CardBody>
                    <CardTitle>
                      <img
                        alt="services"
                        src={bookshelf}
                        width="200px"
                        height="100px"
                      />
                      <Typography variant="h5">Creative Storages</Typography>
                      <Box mb={2} />
                      <Paragraph>
                        Janitor Unit, Skirting Drawer, Pantry Pull Out,
                        Appliance Garage, Magic Corner,Study Unit{" "}
                      </Paragraph>
                    </CardTitle>
                  </CardBody>
                  <Hover></Hover>
                </DisplayOver>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card>
                <DisplayOver picture={planBG}>
                  <CardBody>
                    <CardTitle>
                      <img
                        alt="services"
                        src={designService}
                        width="200px"
                        height="100px"
                      />
                      <Typography variant="h5">Interior Designs</Typography>
                      <Box mb={2} />
                      <Paragraph>
                        Furnishing, Wall Panelling, Fall Ceiling, Lighting
                        decors, Accessories
                      </Paragraph>
                    </CardTitle>
                  </CardBody>
                  <Hover></Hover>
                </DisplayOver>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card>
                <DisplayOver picture={bathRoomBG}>
                  <CardBody>
                    <CardTitle>
                      <img
                        alt="services"
                        src={plan}
                        width="200px"
                        height="100px"
                      />
                      <Typography variant="h5">Building Services</Typography>
                      <Box mb={2} />
                      <Paragraph>
                        Painting, Bathroom Remodelling, Tiling, Plumbing,
                        Electrical, Civil Work, Deep Cleaning
                      </Paragraph>
                    </CardTitle>
                  </CardBody>
                  <Hover></Hover>
                </DisplayOver>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card>
                <DisplayOver picture={dressroom1}>
                  <CardBody>
                    <CardTitle>
                      <img
                        alt="services"
                        src={bedroom1}
                        width="200px"
                        height="100px"
                      />
                      <Typography variant="h5">Living/Dining Room</Typography>
                      <Box mb={2} />
                      <Paragraph>
                        Wardrobes, TV Unit, Bed with Storage, Dressing Unit,
                        Hidden Bar Cabinet
                      </Paragraph>
                    </CardTitle>
                  </CardBody>
                  <Hover></Hover>
                </DisplayOver>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ServicesSection>
    </ServiceContainer>
  );
};

export default Services;
