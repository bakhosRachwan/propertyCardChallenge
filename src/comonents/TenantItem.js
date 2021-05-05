import { Container, Typography } from "@material-ui/core";

const TenantItem = ({item}) => {
    return ( 
        <Container>
            <Typography as="h6">{item.address}</Typography>
            <Typography as="h6">{item.amount}</Typography>
            <Typography as="h6">{item.endDate}</Typography>
            <Typography as="h6">{item.startDate}</Typography>
            <Typography as="h6">{item.ownerId}</Typography>
            <Typography as="h6">{item.propertyId}</Typography>
            <Typography as="h6">{item.tenantId}</Typography>
            <Typography as="h6">{item.tenantEmail}</Typography>
        </Container>
     );
}
 
export default TenantItem;