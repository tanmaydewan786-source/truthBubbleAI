import { useState } from "react";
import "./BravoBetaForm.css";

const BREVO_FORM_ACTION =
  "https://4ac770a8.sibforms.com/serve/MUIFAN5ovGnd6D5IxBogKMn-w4ZXdGgNmt6w5q1lwuSVKavFYRzQWz1vdAu2gWW4wxtI54OPcmbWdRkXeAwuZ7JZQ_lV7SleTZJOmmTW7CZY9lKbRcaDrJ_1zQf0IFm1yJHo0jSfDjIkYIfDuMB0Tg3IbMcepX35FhoN7JNtFcCVHlz5CBCGNw_FkiJYAlbLfrjN7Se4zN7C3uF_vg==";

const roles = [
  "Beta tester",
  "Founding backer",
  "Investor partner",
];

const countries = [
  { code: "+91", label: "IN" },
  { code: "+1", label: "US" },
  { code: "+44", label: "GB" },
  { code: "+61", label: "AU" },
  { code: "+1", label: "CA" },
  { code: "+971", label: "AE" },
  { code: "+65", label: "SG" },
  { code: "+49", label: "DE" },
  { code: "+33", label: "FR" },
  { code: "+81", label: "JP" },
];

function BrevoMessage({ id, type, children }) {
  const isError = type === "error";

  return (
    <div
      id={id}
      className={`sib-form-message-panel ${
        isError ? "brevo-message-error" : "brevo-message-success"
      }`}
    >
      <div className="sib-form-message-panel_text sib-form-message-panel_text--center">
        <svg
          viewBox="0 0 512 512"
          className="sib-icon sib-notification__icon"
          aria-hidden="true"
        >
          {isError ? (
            <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
          ) : (
            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
          )}
        </svg>

        <span className="sib-form-message-panel__inner-text">
          {children}
        </span>
      </div>
    </div>
  );
}

function FieldError({ secondary = false }) {
  return (
    <label
      className={`entry_error ${
        secondary
          ? "entry_error--secondary"
          : "entry_error--primary"
      }`}
    />
  );
}

export default function BrevoBetaForm() {
  const [submitState, setSubmitState] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.getAll("ROLE[]").length === 0) {
      setSubmitState("error");
      setFeedback("Please select at least one role before joining.");
      form.querySelector('input[name="ROLE[]"]')?.focus();
      return;
    }

    setSubmitState("submitting");
    setFeedback("Sending your details to Brevo…");

    try {
      await fetch(BREVO_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(formData),
      });

      setSubmitState("success");
      setFeedback(
        "Your details were sent successfully. Please check your inbox for Brevo’s confirmation email."
      );
      form.reset();
    } catch {
      setSubmitState("error");
      setFeedback(
        "We couldn’t submit your details. Please check your connection and try again."
      );
    }
  };

  return (
    <section className="beta-form-section">
      <BrevoMessage id="error-message" type="error">
        Your subscription could not be saved. Please try again.
      </BrevoMessage>

      <BrevoMessage id="success-message" type="success">
        Your information has been captured successfully.
      </BrevoMessage>

      <div
        id="sib-container"
        className="sib-container--large sib-container--vertical beta-form-container"
      >
        <form
          id="sib-form"
          method="POST"
          action={BREVO_FORM_ACTION}
          data-type="subscription"
          onSubmit={handleSubmit}
        >
          <div className="beta-form-logo-wrapper">
            <img
              className="beta-form-logo"
              src="https://img.mailinblue.com/11664361/images/content_library/original/6a59006a6a1a0525d404c2f9.png"
              alt="Truth Bubble AI"
            />
          </div>

          <div className="sib-form-block beta-form-heading">
            <h2>Join the beta program</h2>
          </div>

          <div className="sib-form-block beta-form-description">
            <p>
              Join a community of early testers and backers
              building a safer digital future. Help us stop
              misinformation, deepfakes, and financial scams in
              real time.
            </p>
          </div>

          <div
            className="sib-checkbox-group sib-form-block"
            data-required="true"
          >
            <div className="form__entry entry_mcq">
              <div className="form__label-row">
                <label
                  className="entry__label beta-form-field-label"
                  data-required="*"
                >
                  I want to be a
                </label>

                <div className="beta-role-list">
                  {roles.map((role) => (
                    <div className="entry__choice" key={role}>
                      <label className="checkbox__label">
                        <input
                          type="checkbox"
                          className="input_replaced"
                          name="ROLE[]"
                          data-value={role}
                          value={role}
                          data-required="true"
                        />

                        <span className="checkbox checkbox_tick_positive" />

                        <span className="beta-checkbox-text">
                          {role}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <FieldError />
            </div>
          </div>

          <div className="sib-input sib-form-block">
            <div className="form__entry entry_block">
              <div className="form__label-row">
                <div className="entry__field">
                  <input
                    className="input"
                    maxLength={200}
                    type="text"
                    id="FIRSTNAME"
                    name="FIRSTNAME"
                    autoComplete="name"
                    placeholder="Full name"
                    data-required="true"
                    required
                  />
                </div>
              </div>

              <FieldError />
            </div>
          </div>

          <div className="sib-input sib-form-block">
            <div className="form__entry entry_block">
              <div className="form__label-row">
                <div className="entry__field">
                  <input
                    className="input"
                    type="email"
                    id="EMAIL"
                    name="EMAIL"
                    autoComplete="email"
                    placeholder="Email"
                    data-required="true"
                    required
                  />
                </div>
              </div>

              <FieldError />
            </div>
          </div>

          <div className="sib-form-block beta-phone-block">
            <div className="form__entry entry_block">
              <div className="form__label-row">
                <div className="beta-phone-row" dir="ltr">
                  <div className="entry__field beta-country-field">
                    <select
                      className="input beta-country-select"
                      name="SMS__COUNTRY_CODE"
                      defaultValue="+91"
                      aria-label="Country code"
                    >
                      {countries.map((country, index) => (
                        <option
                          key={`${country.label}-${country.code}-${index}`}
                          value={country.code}
                        >
                          {country.label} {country.code}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="entry__field beta-phone-field">
                    <input
                      type="tel"
                      className="input"
                      id="SMS"
                      name="SMS"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="Phone number"
                      aria-label="Phone number"
                    />
                  </div>
                </div>
              </div>

              <FieldError />
              <FieldError secondary />
            </div>
          </div>

          <div
            className="sib-optin sib-form-block"
            data-required="true"
          >
            <div className="form__entry entry_mcq">
              <div className="form__label-row">
                <div className="entry__choice">
                  <label className="beta-consent-label">
                    <input
                      type="checkbox"
                      className="input_replaced"
                      value="1"
                      id="CONSENT_PRIVACY_POLICY"
                      name="CONSENT_PRIVACY_POLICY"
                      required
                    />

                    <span className="checkbox checkbox_tick_positive" />

                    <span className="beta-consent-text">
                      By checking this, you agree that Truth Bubble
                      AI may store and use your contact details to
                      provide beta access, product updates, and
                      information regarding our community-led
                      fundraising and backer programs. We process
                      your data securely through Brevo and will never
                      sell or share your personal information. You
                      can opt out or request data deletion at any time
                      through the unsubscribe link in our emails.
                    </span>
                  </label>
                </div>
              </div>

              <FieldError />
            </div>
          </div>

          <div className="sib-form__declaration beta-declaration">
            <div className="beta-security-icon" aria-hidden="true">
              ✓
            </div>

            <div className="beta-declaration-text">
              <p>
                We use Brevo as our marketing platform. By
                submitting this form, you agree that the personal
                data you provided will be transferred to Brevo for
                processing in accordance with{" "}
                <a
                  href="https://www.brevo.com/en/legal/privacypolicy/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Brevo&apos;s Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>

          <div className="sib-form-block beta-submit-wrapper">
            <button
              className="beta-submit-button"
              type="submit"
              disabled={submitState === "submitting"}
            >
              {submitState === "submitting"
                ? "Joining…"
                : "Join the beta program"}
            </button>

            {feedback && (
              <p
                className={`beta-submit-feedback beta-submit-feedback--${submitState}`}
                role={submitState === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {feedback}
              </p>
            )}
          </div>

          <input
            type="text"
            name="email_address_check"
            defaultValue=""
            className="input--hidden"
            tabIndex={-1}
            aria-hidden="true"
          />

          <input type="hidden" name="locale" value="en" />
        </form>
      </div>
    </section>
  );
}
