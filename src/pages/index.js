import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>Visão Geral | Dunamis Farm</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewBudget difference={12} positive sx={{ height: "100%" }} value="11" />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: "100%" }}
              value="120"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTasksProgress sx={{ height: "100%" }} value={75.5} />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalProfit sx={{ height: "100%" }} value="R$15k" />
          </Grid>
          {/* <Grid xs={12} lg={8}>
            <OverviewSales
              chartSeries={[
                {
                  name: "This year",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
                {
                  name: "Last year",
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid> */}
          {/* <Grid xs={12} md={6} lg={4}>
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={["Desktop", "Tablet", "Phone"]}
              sx={{ height: "100%" }}
            />
          </Grid> */}
          <Grid xs={12} md={6} lg={4}>
            <OverviewLatestProducts
              products={[
                {
                  id: "5ece2c077e39da27658aa8a9",
                  image: "/assets/products/product-1.png",
                  name: "Healthcare Erbology",
                  updatedAt: subHours(now, 6).getTime(),
                },
                {
                  id: "5ece2c0d16f70bff2cf86cd8",
                  image: "/assets/products/product-2.png",
                  name: "Makeup Lancome Rouge",
                  updatedAt: subDays(subHours(now, 8), 2).getTime(),
                },
                {
                  id: "b393ce1b09c1254c3a92c827",
                  image: "/assets/products/product-5.png",
                  name: "Skincare Soja CO",
                  updatedAt: subDays(subHours(now, 1), 1).getTime(),
                },
                {
                  id: "a6ede15670da63f49f752c89",
                  image: "/assets/products/product-6.png",
                  name: "Makeup Lipstick",
                  updatedAt: subDays(subHours(now, 3), 3).getTime(),
                },
                {
                  id: "bcad5524fe3a2f8f8620ceda",
                  image: "/assets/products/product-7.png",
                  name: "Healthcare Ritual",
                  updatedAt: subDays(subHours(now, 5), 6).getTime(),
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={12} lg={8}>
            <OverviewLatestOrders
              orders={[
                {
                  id: "f69f88012978187a6c12897f",
                  ref: "Dunamis Xperience",
                  amount: 30.5,
                  customer: {
                    name: "Teofilo",
                  },
                  createdAt: 1555016400000,
                  status: "pendente",
                },
                {
                  id: "9eaa1c7dd4433f413c308ce2",
                  ref: "Raízes",
                  amount: 25.1,
                  customer: {
                    name: "Zoe Lily",
                  },
                  createdAt: 1555016400000,
                  status: "confirmado",
                },
                {
                  id: "01a5230c811bd04996ce7c13",
                  ref: "Conferência Geração 5.2",
                  amount: 10.99,
                  customer: {
                    name: "Hayashi",
                  },
                  createdAt: 1554930000000,
                  status: "cancelado",
                },
                {
                  id: "1f4e1bd0a87cea23cdb83d18",
                  ref: "Conferência",
                  amount: 96.43,
                  customer: {
                    name: "Hayashi",
                  },
                  createdAt: 1554757200000,
                  status: "pendente",
                },
                {
                  id: "9f974f239d29ede969367103",
                  ref: "Conferência",
                  amount: 32.54,
                  customer: {
                    name: "Hayashi",
                  },
                  createdAt: 1554670800000,
                  status: "confirmado",
                },
                {
                  id: "ffc83c1560ec2f66a1c05596",
                  ref: "Conferência",
                  amount: 16.76,
                  customer: {
                    name: "Hayashi",
                  },
                  createdAt: 1554670800000,
                  status: "confirmado",
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
