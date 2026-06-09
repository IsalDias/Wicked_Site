"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Paper,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";

const SERVICES = [
  "Event Management",
  "Photography & Videography",
  "Music Production",
  "Graphic Designing",
  "Branding",
  "Printing",
  "Compering",
  "Other",
];

export default function ContactPage() {
  const formRef = React.useRef(null);

  const [service, setService] = React.useState("");
  const [otherService, setOtherService] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [consent, setConsent] = React.useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const whatsappNumber = "61400000000";
  const whatsappText = encodeURIComponent(
    "Hi Wicked Revelations! I want to get WICKED. Can we chat?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !service || !message || !consent) {
      alert("Please fill all fields and consent to continue.");
      return;
    }
    if (service === "Other" && !otherService.trim()) {
      alert("Please specify your service.");
      return;
    }

    const payload = {
      service: service === "Other" ? `Other: ${otherService}` : service,
      name,
      email,
      phone,
      message,
      consent,
    };

    console.log("Contact form payload:", payload);
    alert("Submitted! We’ll get back to you soon.");

    setService("");
    setOtherService("");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setConsent(false);
  };

  const darkInputStyle = {
    "& .MuiOutlinedInput-root": {
      color: "#fff",
      "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
      "&:hover fieldset": { borderColor: "rgba(255,255,255,0.4)" },
      "&.Mui-focused fieldset": { borderColor: "#e00000" },
    },
    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.6)" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#e00000" },
  };

  return (
    <Box sx={{ bgcolor: "#000", minHeight: "100vh", py: { xs: 6, md: 18 } }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Stack spacing={1.2} sx={{ mb: 4 }}>
          <Typography
            sx={{ fontWeight: 900, fontSize: { xs: 34, md: 44 }, color: "#fff" }}
          >
            Contact Us
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 16, maxWidth: 980 }}>
            Are you ready to touch new dimensions of live entertainment? Contact the
            best ever event management and global tour organizers in Australia.
            Your idea awaits to get WICKED!
          </Typography>
        </Stack>

        {/* CTA */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            bgcolor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Stack spacing={1.2}>
            <Typography sx={{ fontWeight: 900, fontSize: { xs: 22, md: 26 }, color: "#fff" }}>
              Ready to get WICKED?
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
              Well, you took the right decision.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
              <Button
                onClick={scrollToForm}
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "#000",
                  px: 3,
                  py: 1.4,
                  borderRadius: 2,
                  fontWeight: 900,
                  "&:hover": { bgcolor: "grey" },
                }}
              >
                Drop us a mail
              </Button>

              <Button
                component="a"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#fff",
                  px: 3,
                  py: 1.4,
                  borderRadius: 2,
                  fontWeight: 900,
                  "&:hover": { borderColor: "#fff" },
                }}
              >
                Slide into WhatsApp
              </Button>
            </Stack>
          </Stack>
        </Paper>

        <Divider sx={{ my: 5, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Form */}
        <Box ref={formRef}>
          <Typography sx={{ fontWeight: 900, fontSize: { xs: 22, md: 26 }, color: "#fff" }}>
            Come let’s talk
          </Typography>

          <Typography sx={{ mt: 1, color: "rgba(255,255,255,0.7)" }}>
            Tell us what you have in mind. (We&apos;ll make it cooler)
          </Typography>

          <Paper
            elevation={0}
            sx={{
              mt: 3,
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              bgcolor: "#111",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2.2}>

                <TextField
                  select
                  label="Select the Service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  fullWidth
                  sx={darkInputStyle}
                >
                  {SERVICES.map((s) => (
                    <MenuItem key={s} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </TextField>

                {service === "Other" && (
                  <TextField
                    label="Specify"
                    value={otherService}
                    onChange={(e) => setOtherService(e.target.value)}
                    fullWidth
                    sx={darkInputStyle}
                  />
                )}

                <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                  <TextField
                    label="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    sx={darkInputStyle}
                  />

                  <TextField
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    sx={darkInputStyle}
                  />
                </Stack>

                <TextField
                  label="Contact Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  fullWidth
                  sx={darkInputStyle}
                />

                <TextField
                  label="Your message to us"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  fullWidth
                  multiline
                  minRows={5}
                  placeholder="Tell us what you have in mind."
                  sx={darkInputStyle}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      sx={{
                        color: "rgba(255,255,255,0.5)",
                        "&.Mui-checked": { color: "#e00000" },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                      I consent to Wicked Revelations acquiring my information to maintain communication.
                    </Typography>
                  }
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#e00000",
                    color: "#fff",
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 900,
                    width: { xs: "100%", sm: 220 },
                    "&:hover": { bgcolor: "#c00000" },
                  }}
                >
                  Submit
                </Button>

              </Stack>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}