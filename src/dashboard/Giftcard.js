import React, { useState } from 'react'
import {
  Button,
  Grid,
  Paper,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  ButtonGroup,
} from '@mui/material'
import {
  AccountCircle,
  ExitToAppSharp,
  CottageRounded,
} from '@mui/icons-material'

import { styled } from '@mui/material/styles'
import {
  PaddingDiv,
  SubHeading,
  GiftCard,
  GiftIndexs,
  GiftIndex,
  GiftPart,
  GiftTitle,
} from './styles'

import MyDocument from '../pdfviewer/MyDocument'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function Giftcard() {
  const [flag, setFlag] = useState(false)
  const [giftcontent, setGiftcontent] = useState({})
  const [state, setState] = useState({})
  const [salonName, setsalonName] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [terms, setTerms] = useState('')
  const [to, setTo] = useState('')
  const [from, setFrom] = useState('')
  const [amount, setAmount] = useState('')
  const [checkout, setCheckOut] = useState('')
  const [note, setNote] = useState('')
  const [occasion, setOccasion] = useState('')

  const changeValue = (event) => {
    const { name, value } = event.target
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleChange = (event) => {
    setOccasion(event.target.value)
    // switch (event.target.value) {
    //     case 'graduation':
    //         setGift(GraduationGift);
    //         break;
    //     case 'wedding':
    //         setGift(WeddingGift);
    //         break;
    //     case 'anniversary':
    //         setGift(AnniversaryGift);
    //         break;
    //     case 'birthday':
    //         setGift(BirthdayGift);
    //         break;
    //     case 'chrismas':
    //         setGift(ChrismasGift);
    //         break;
    //     default:
    //         setGift(DashboardGift);
    //         break;
    // }
  }

  const onSaveGift = () => {
    setsalonName(state.salon_name)
    setTitle(state.title_name)
    setPrice(state.price_name)
    setTerms(state.terms_name)
    setTo(state.to_name)
    setFrom(state.from_name)
    setAmount(state.amount_name)
    setCheckOut(state.checkout_name)
    setNote(state.note_name)
  }

  const onBackToCard = () => {
    setsalonName('')
    setTitle('')
    setPrice('')
    setTerms('')
    setTo('')
    setFrom('')
    setAmount('')
    setCheckOut('')
    setNote('')
    setOccasion('')
    setState({})
    setFlag(false)
  }

  const onPrintPDF = () => {
    let gifttemp = {
      ptitle: title,
      psalonName: salonName,
      pprice: price,
      pterm: terms,
      pto: to,
      pfrom: from,
      poccasion: occasion,
      pamount: amount,
      pcheckout: checkout,
      pnote: note,
    }
    setFlag(true)
    setGiftcontent(gifttemp)
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          {!flag ? (
            <>
              {/* App Bar Part */}
              <Grid item xs={12}>
                <AppBar position="static">
                  <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="home"
                      sx={{ mr: 2 }}
                    >
                      <CottageRounded />
                    </IconButton>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      Gift Card Template
                    </Typography>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="login"
                      sx={{ mr: 2 }}
                    >
                      <AccountCircle />
                    </IconButton>
                  </Toolbar>
                </AppBar>
              </Grid>

              <Grid item xs={6} style={{ background: 'grey' }}>
                {/* Various Git Card Template Part */}
                <Item style={{ marginBottom: '15px' }}>
                  <GiftCard>
                    <GiftTitle>{title}</GiftTitle>
                    <GiftIndexs>
                      <GiftIndex>Name: {salonName}</GiftIndex>
                      <GiftIndex>Price: {price}</GiftIndex>
                      <GiftIndex>Terms and conditions: {terms}</GiftIndex>
                      <GiftIndex>To: {to}</GiftIndex>
                      <GiftIndex>From: {from}</GiftIndex>
                      <GiftIndex>Occasion: {occasion}</GiftIndex>
                      <GiftIndex>
                        <GiftPart>Amount: {amount}</GiftPart>
                        <GiftPart>Check out: {checkout}</GiftPart>
                      </GiftIndex>
                      <GiftIndex>Note: {note}</GiftIndex>
                    </GiftIndexs>
                  </GiftCard>
                </Item>
                {/* Gift Card Operation Part */}
                <Item style={{ marginBottom: '15px' }}>
                  <ButtonGroup disableElevation varient="outlined">
                    <Button
                      size="medium"
                      color="primary"
                      onClick={onSaveGift}
                      varient="outlined"
                    >
                      Save Gift Card
                    </Button>
                    <Button
                      size="medium"
                      color="success"
                      onClick={onPrintPDF}
                      varient="outlined"
                    >
                      Print Into PDF
                    </Button>
                  </ButtonGroup>
                </Item>
              </Grid>
              {/* Gift Card Editing Part */}
              <Grid item xs={6} style={{ background: 'grey' }}>
                {/* Clients Content Editing Part */}
                <Item style={{ marginBottom: '15px' }}>
                  <SubHeading>Our Clients</SubHeading>
                  <PaddingDiv>
                    <TextField
                      name="salon_name"
                      value={state['salon_name']}
                      onChange={changeValue}
                      label="Name of the Salon"
                      autoComplete="current-password"
                      size="small"
                      multiline
                    />
                    <TextField
                      name="title_name"
                      value={state['title_name']}
                      onChange={changeValue}
                      label="Title of The Gift Card / Certificate"
                      autoComplete="current-password"
                      size="small"
                      style={{ width: '60%', marginLeft: '10px' }}
                      multiline
                    />
                  </PaddingDiv>
                  <PaddingDiv>
                    <TextField
                      name="price_name"
                      value={state['price_name']}
                      onChange={changeValue}
                      label="Price / Amount $"
                      autoComplete="current-password"
                      size="small"
                      multiline
                    />
                    <TextField
                      name="terms_name"
                      value={state['terms_name']}
                      onChange={changeValue}
                      label="Terms and conditions"
                      autoComplete="current-password"
                      size="small"
                      multiline
                      rows={4}
                      style={{ width: '60%', marginLeft: '10px' }}
                    />
                  </PaddingDiv>
                </Item>
                {/* Customer Content Editing Part */}
                <Item style={{ marginBottom: '15px' }}>
                  <SubHeading>Customers</SubHeading>
                  <PaddingDiv>
                    <TextField
                      name="from_name"
                      value={state['from_name']}
                      onChange={changeValue}
                      label="From"
                      autoComplete="current-password"
                      size="small"
                      // InputProps={{
                      //     startAdornment: <InputAdornment position="start"> </InputAdornment>,
                      // }}
                      style={{ width: '45%', marginRight: '10px' }}
                      multiline
                    />
                    <TextField
                      name="to_name"
                      value={state['to_name']}
                      onChange={changeValue}
                      label="To"
                      autoComplete="current-password"
                      size="small"
                      // InputProps={{
                      //     startAdornment: <InputAdornment position="start"> </InputAdornment>,
                      // }}
                      style={{ width: '45%', marginLeft: '10px' }}
                      multiline
                    />
                  </PaddingDiv>
                  <PaddingDiv>
                    <FormControl variant="filled" sx={{ minWidth: '32%' }}>
                      <InputLabel id="demo-simple-select-label">
                        Occasion
                      </InputLabel>
                      <Select
                        id="demo-simple-select"
                        value={occasion}
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>Empty</em>
                        </MenuItem>
                        <MenuItem value="birthday">Birthday</MenuItem>
                        <MenuItem value="anniversary">Anniversary</MenuItem>
                        <MenuItem value="graduation">Graduation</MenuItem>
                        <MenuItem value="wedding">Wedding</MenuItem>
                        <MenuItem value="chrismas">Chrismas</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      name="note_name"
                      value={state['note_name']}
                      onChange={changeValue}
                      label="Notes"
                      autoComplete="current-password"
                      size="small"
                      multiline
                      rows={3}
                      style={{ width: '60%', marginLeft: '10px' }}
                    />
                  </PaddingDiv>
                  <PaddingDiv>
                    <TextField
                      name="amount_name"
                      value={state['amount_name']}
                      onChange={changeValue}
                      label="Select or type the amount"
                      autoComplete="current-password"
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                      multiline
                    />
                    <TextField
                      name="checkout_name"
                      value={state['checkout_name']}
                      onChange={changeValue}
                      label="Check out"
                      autoComplete="current-password"
                      size="small"
                      style={{ width: '57%', marginLeft: '10px' }}
                      multiline
                    />
                  </PaddingDiv>
                </Item>
              </Grid>
            </>
          ) : (
            <>
              {/* App Bar Part */}
              <Grid item xs={12}>
                <AppBar position="static">
                  <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      onClick={onBackToCard}
                    >
                      <CottageRounded />
                    </IconButton>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      Gift Card Template
                    </Typography>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="login"
                      sx={{ mr: 2 }}
                      onClick={onBackToCard}
                    >
                      <ExitToAppSharp />
                    </IconButton>
                  </Toolbar>
                </AppBar>
              </Grid>
              <Grid item xs={12}>
                <MyDocument giftcontent={giftcontent} />
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </>
  )
}

export default Giftcard
