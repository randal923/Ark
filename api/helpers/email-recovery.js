const transporter = require("nodemailer").createTransport(
    require("../config/email")
);
const { api: link } = require("../config/index");

module.exports = ({ user, recovery }, cb) => {
    const message = `
          <h1 style="text-align: center;">Password Recovery</h1>
          <br />
          <p>
              To se a new password for your account follow the link (or paste it into your browser if that doesn't work).
          </p>
          <a href="${link}/v1/api/users/password-recovered?token=${
        recovery.token
        }">
              ${link}/v1/api/users/password-recovered?token=${recovery.token}
          </a>
          <br /><br/><br/>
          <p>
              If you haven't request a password reset, please ignore this email.
          </p>
      `;

    const emailOptions = {
        from: "donotreply@e-commerce.com",
        to: user.email,
        subject: "Your account password has been reset",
        html: message
    };

    if (process.env.NODE_ENV === "production") {
        transporter.sendMail(emailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return cb("An error has occurred, try again.");
            } else {
                return cb(
                    null,
                    "Link to reset password succcessfully sent to your email."
                );
            }
        });
    } else {
        console.log(emailOptions);
        return cb(null, "Link to reset password succcessfully sent.");
    }
};