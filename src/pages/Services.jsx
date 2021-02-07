import { Container, Typography, Avatar, Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import bookshelf from "../media/svg/studying.svg";
import livingRoom from "../media/svg/livingRoom.svg";
import underConstruction from "../media/svg/underConstruction.svg";
import chef from "../media/svg/chef.svg";
import idea from "../media/svg/idea.svg";
import engineer from "../media/svg/engineer.svg";

const ServiceContainer = styled.section`
  padding: 32px;
  margin: 0px 32px;
  @media screen and (max-width: 768px) {
    height: calc(100vh - 100%);
  }
`;

const ServicesSection = styled.section``;
//  margin: 10px 5px;

const Title = styled.h1`
  margin: 40px 16px;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.025em;
  font-size: clamp(2rem, 8vw, 4rem);
`;

const Card = styled.div`
  height: 300px;
  width: 300px;
  margin: 8px;
  padding: 20px;
  border-radius: 25px;
  background: #fdfdfd;
  box-shadow: -2px -2px 10px #f4eee1, 2px 2px 10px #babecc;
`;

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
                <div style={{ textAlign: "center" }}>
                  <img
                    alt="services"
                    src={livingRoom}
                    width="200px"
                    height="100px"
                  />
                  <Typography variant="h5">Entertainment</Typography>
                  <Box mb={2} />
                  <p>A soothing design for your entertainment units</p>
                </div>
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
                <div style={{ textAlign: "center" }}>
                  <img alt="services" src={chef} width="200px" height="100px" />
                  <Typography variant="h5">Kitchen</Typography>
                  <Box mb={2} />
                  <p>
                    Modular kitchens,crockeries unit,Countertops, Backsplashes,
                    Accessories, Shutters, Storage
                  </p>
                </div>
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
                <div style={{ textAlign: "center" }}>
                  <img alt="services" src={idea} width="200px" height="100px" />
                  <Typography variant="h5">Idea</Typography> <Box mb={2} />
                  <p>
                    Janitor Unit, Skirting Drawer, Pantry Pull Out, Appliance
                    Garage, Magic Corner,Study Unit
                  </p>
                </div>
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
                <div style={{ textAlign: "center" }}>
                  <img
                    alt="services"
                    src={underConstruction}
                    width="200px"
                    height="100px"
                  />
                  <Typography variant="h5">under construction</Typography>
                  <Box mb={2} />
                  <p>Complete/ maintaince of buildings</p>
                </div>
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
                <div style={{ textAlign: "center" }}>
                  <img
                    alt="services"
                    src={engineer}
                    width="200px"
                    height="100px"
                  />
                  <Typography variant="h5">Engineer</Typography>
                  <Box mb={2} />
                  <p>
                    Painting, Bathroom Remodelling, Tiling, Plumbing,
                    Electrical, Civil Work, Deep Cleaning
                  </p>
                </div>
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
                <div style={{ textAlign: "center" }}>
                  <img
                    alt="services"
                    src={bookshelf}
                    width="200px"
                    height="100px"
                  />
                  <Typography variant="h5"> Space</Typography>
                  <Box mb={2} />
                  <p>
                    Wardrobes, TV Unit, Bed with Storage, Dressing Unit, Hidden
                    Bar Cabinet
                  </p>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ServicesSection>
    </ServiceContainer>
  );
};

export default Services;
