import { Card, Grid, Text } from "@nextui-org/react";
import { Box } from '../../components/styles/box';

export default function services() {
    const services = [
        {   
            title: "Decentralized Storage",
            description: "Medical records are stored securely using IPFS, ensuring data availability and resistance to censorship.",
            img: "https://cdn-icons-png.flaticon.com/512/2885/2885431.png"
        },
        {
            title: "Blockchain Integration",
            description: "Smart contracts on Ethereum handle authorization, access control, and secure record sharing.",
            img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
        },
        {
            title: "Patient-Centric Access",
            description: "Only patients and authorized entities can access or share medical data with full transparency.",
            img: "https://cdn-icons-png.flaticon.com/512/1142/1142090.png"
        },
        {
            title: "Interoperability Support",
            description: "Breaks data silos by allowing seamless sharing across verified healthcare providers.",
            img: "https://cdn-icons-png.flaticon.com/512/3104/3104578.png"
        }
    ];

    return (
        <div style={{ marginTop: "2rem", padding: "2rem" }}>
            <h1 style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem"
            }}>
                OUR SERVICES
            </h1>

            <Box css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "2rem",
                '@sm': { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }
            }}>
                {services.map((service, index) => (
                    <Card key={index} css={{ p: "$6", mw: "400px" }}>
                        <Card.Header>
                            <img
                                src={service.img}
                                alt={service.title}
                                width="40px"
                                height="40px"
                            />
                            <Grid.Container css={{ pl: "$6" }}>
                                <Grid xs={12}>
                                    <Text h4 css={{ lineHeight: "$xs" }}>
                                        {service.title}
                                    </Text>
                                </Grid>
                            </Grid.Container>
                        </Card.Header>
                        <Card.Body css={{ py: "$2" }}>
                            <Text>
                                {service.description}
                            </Text>
                        </Card.Body>
                    </Card>
                ))}
            </Box>
        </div>
    );
}
