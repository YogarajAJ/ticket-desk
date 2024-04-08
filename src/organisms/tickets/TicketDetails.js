import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { Avatar, Box, Chip, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReplyTicket from "../../molecules/tickets/ResolveTicket";
import { useSelector } from "react-redux";
import { PRIORITY_MAPPER, STATUS_MAPPER } from "../../constants";
import {
  AVATAR_STYLE,
  FLEX_CENTER_SPACEBETWEEN,
  POINTED_CURSOR,
  TICKET_DETAILS_CONTAINER,
} from "../../styles";
const TicketDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const tickets = useSelector(({ ticketInfo }) => ticketInfo?.tickets);

  const [ticketData, setTicketData] = React.useState({});

  React.useEffect(() => {
    const ticket = tickets.find((tc) => tc.id === id);
    setTicketData(ticket);
  }, [id, tickets]);

  const backToTickets = () => {
    navigate(-1);
  };

  const isResolvedTicket = ticketData?.status === "RESOLVED";

  return (
    <Box sx={TICKET_DETAILS_CONTAINER} component={Paper}>
      <Stack spacing={3}>
        <Box sx={FLEX_CENTER_SPACEBETWEEN}>
          <Stack direction="row" spacing={2} alignItems="center">
            <ArrowBackTwoToneIcon sx={POINTED_CURSOR} onClick={backToTickets} />
            <Avatar
              className={`${ticketData?.status}_CIRCLE`}
              sx={AVATAR_STYLE}
            />
            <Typography>#{ticketData?.id}</Typography>
            <Chip
              label={PRIORITY_MAPPER[ticketData?.priority]}
              className={ticketData?.priority}
            />
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <Typography>
              <Typography variant="body">Status : </Typography>
              <b className={`${ticketData?.status} status-text `}>
                {STATUS_MAPPER[ticketData?.status]}
              </b>
            </Typography>
            <Typography>|</Typography>

            <Typography>
              <Typography variant="body">Requested at : </Typography>
              <b>{ticketData?.createdAt}</b>
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            {ticketData?.title}
          </Typography>
          <Typography>{ticketData?.description}</Typography>
        </Box>
        {isResolvedTicket ? (
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Resolution
            </Typography>
            <Typography>{ticketData?.resolution}</Typography>
          </Box>
        ) : (
          <></>
        )}
      </Stack>
      {isResolvedTicket ? (
        <Typography>
          Ticket resolved at <b>{ticketData?.resolvedAt}</b>
        </Typography>
      ) : (
        <ReplyTicket ticketData={ticketData} />
      )}
    </Box>
  );
};

export default TicketDetails;
