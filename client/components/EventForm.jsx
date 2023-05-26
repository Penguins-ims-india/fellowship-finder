import {
  Box, Grid, Paper, Button, Typography, Container, TextField
} from '@mui/material';
import dayjs from 'dayjs';
import DateSelect from './DateSelect';
import AddressForm from './AddressForm';
import UsersSelect from './UsersSelect';


const EventForm = ({ event, setEventValue, users }) => {
  return (
    <div>
      {event
        ? (
          <>
            <Container sx={{ marginBottom: '20px' }}>
              <Box component="form" noValidate autoComplete="off" sx={{ width: '90%' }}>
                <TextField
                  name="link"
                  label="Event Name"
                  value={event ? event.title : ''}
                  onChange={({ target: { value } }) => setEventValue('title', value)}
                  sx={{ width: '100%' }}
                />
              </Box>
            </Container>
            <Container>
              <DateSelect date={event ? event.start : dayjs(new Date())} label="Start" setSelectedDate={(date) => setEventValue('start', date)} />
              <DateSelect date={event ? event.end : dayjs(new Date())} label="End" setSelectedDate={(date) => setEventValue('end', date)} />
            </Container>
            <AddressForm address={event ? event.address : ''} setAddress={(address) => setEventValue('address', address)} sx={{ width: '90%' }} />
            <Container sx={{ marginTop: '20px', marginBottom: '20px' }}>
              <UsersSelect
                users={users || []}
                label="Invites"
                selectedUsers={event.selectedUsers || []}
                setSelectedUsers={(selectedUsers) => setEventValue('selectedUsers', selectedUsers)}
              />
            </Container>
          </>
        ) : (
          <Container />
        )}
    </div>
  );
};

export default EventForm;
