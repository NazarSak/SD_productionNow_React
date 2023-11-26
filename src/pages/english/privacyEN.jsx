import React from "react";
import { HeaderEN } from "../../components/header/HeaderEN";
import { FooterEN } from "../../components/footer/FooterEN";
import LeftArrowPrivacy from '../../assets/svg/LeftArrowPrivacy.svg'
import {
  TitleHTwo,
  TitleSpan,
  BackButton,
  Container,
  Paragraph,
  ParagraphLine,
  ParagraphSpan,
  List,
  Section,
  Br,
  Line,
  ParagraphSpanWithUnderLine,
  Li,
  FooterContainer
} from "../styles/privacy.styled";

export const PrivacyEN = () => {
  return (
    <>
      <HeaderEN name={"/de/privacy"} />
      <Container>
        <BackButton to="/">
          <img src={LeftArrowPrivacy} alt="arrow" />
          Back to home screen
        </BackButton>

        <TitleHTwo>
          Privacy <TitleSpan>Policy</TitleSpan>
        </TitleHTwo>
        <List>
          <Li>
            <Paragraph>
              <ParagraphSpan>SD Production</ParagraphSpan> (hereinafter "we",
              "us" or "our") respects the privacy of users (hereinafter "you" or
              "user") and makes every effort to protect the personal information
              you choose to provide to us. This Privacy Policy describes our
              practices regarding the collection, use and disclosure of your
              information through your use of our websites, applications and
              services (collectively, the "Data").
            </Paragraph>
          </Li>
          <Li>
            <Paragraph>
              <ParagraphSpan class="colorSpan">Data</ParagraphSpan> is any
              information that is directly or indirectly related to the users of
              the website.
            </Paragraph>
          </Li>
        </List>

        {/* 2 */}
        <Section>
          <TitleHTwo>
            Personal <TitleSpan>Data</TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Line />
              <ParagraphLine>Full name, phone number, e-mail address.</ParagraphLine>
            </Li>

            <Li>
              <Line />
              <ParagraphLine>
                User information when contracting services on the website.
              </ParagraphLine>
            </Li>

            <Li>
              <Line />
              <ParagraphLine>
                Data on devices and their use: IP address, time, date of use of
                the website by the user, software, as well as browser, operating
                system and other data revealed by the user.
              </ParagraphLine>
            </Li>

            <Li>
              <Line />
              <ParagraphLine>
                Data from surveys related to improving the provision of services
                to users; information obtained by the website as a result of
                marketing activities.
              </ParagraphLine>
            </Li>

            <Li>
              <Line />
              <ParagraphLine>
                Information posted by users based on the results of their
                service, feedback, comments, support requests, complaints,
                grievances and other inquiries.
              </ParagraphLine>
            </Li>
          </List>
        </Section>
        {/* 3 */}
        <Section>
          <TitleHTwo>
            Use of <Br /> cookies and
            <TitleSpan>
              <br /> Other technology
            </TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Paragraph>
                <ParagraphSpan class="colorSpan">Cookies</ParagraphSpan> or
                <ParagraphSpan class="colorSpan"> cookies</ParagraphSpan> are
                small pieces of data that are sent to the user's computer when
                you visit a web page or view an advertising module on a web page
                and are stored on the user's computer or mobile device.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                <ParagraphSpan class="colorSpan">Pixels</ParagraphSpan> or{" "}
                <ParagraphSpan class="colorSpan">pixel tags </ParagraphSpan> are
                digital images, an element of the ad matrix that form the image.
                They can be used to track how often a user uses a web page, to
                identify the user's browser and provide services. For example,
                storing data in the shopping cart between visits, and preventing
                user-initiated website errors, with all information processed
                "as is" and not modified during the data collection process.
              </Paragraph>
            </Li>
          </List>
        </Section>
        {/* 4 */}
        <Section>
          <TitleHTwo>
            Use and purposes of
            <TitleSpan>
              <br />
              Data processing
            </TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Paragraph>
                The Website uses and processes data to perform the functions,
                powers and duties assigned to the Website in accordance with the{" "}
                <ParagraphSpan>current legislation of</ParagraphSpan>
                <ParagraphSpan>Ukraine</ParagraphSpan> and to ensure the
                realization of civil, economic and tax relations.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                <ParagraphSpanWithUnderLine>
                  The website does not process data relating to race,
                  nationality, political opinions, religious and other beliefs
                  or membership of public associations. Information about the
                  physiological characteristics of the user, which can be used
                  to identify him/her, is not processed.
                </ParagraphSpanWithUnderLine>
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                The conditions of data processing and storage are determined on
                the basis of the purposes of data processing, as well as on the
                basis of the conditions established in the contracts concluded
                with users, in accordance{" "}
                <ParagraphSpan>
                  with the requirements of the current legislation of Ukraine.
                </ParagraphSpan>
              </Paragraph>
            </Li>
          </List>
        </Section>
        {/* 5 */}

        <Section>
          <TitleHTwo>
            Conditions of granting{" "}
            <TitleSpan>
              <br /> access to data
            </TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Paragraph>
                Data will not be transferred to third parties or disseminated
                without the consent of the user, except in cases provided for{" "}
                <ParagraphSpan>by applicable Ukrainian law</ParagraphSpan>
                and only in the interests of national security, economic
                well-being and human rights, in particular but not exclusively:
              </Paragraph>
            </Li>
            <Li>
              <Line />
              <ParagraphLine>
                Upon reasonable requests from public authorities authorized to
                request and receive such data.
              </ParagraphLine>
            </Li>
            <Li>
              <Line />
              <ParagraphLine>
                In case the user, in the opinion of the site administration,
                violates the provisions of this policy or other contracts and
                agreements concluded between the site and the user, as well as
                the provisions of the user agreement.
              </ParagraphLine>
            </Li>
            <Li>
              <Paragraph>
                The website reserves the right to exchange data with state
                authorities in accordance with the requirements{" "}
                <ParagraphSpan>
                  of the current legislation of Ukraine
                </ParagraphSpan>{" "}
                to prevent fraud on the website, settle disputes and clarify
                circumstances that may lead to a violation of the current
                legislation of Ukraine.
              </Paragraph>
            </Li>
          </List>
        </Section>
        {/* 6 */}
        <Section>
          <TitleHTwo>
            Data protection in
            <TitleSpan>
              <br />
              SD Production
            </TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Paragraph>
                Applies the necessary technical, organisational and legal
                measures during data processing to protect data from
                unauthorised or unlawful access, including modification,
                deletion, provision, distribution and other unlawful acts.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                The site shall continuously monitor the security measures taken.
              </Paragraph>
            </Li>
          </List>
        </Section>
        {/* 7 */}
        <Section>
          <TitleHTwo>
            Additional <TitleSpan>Terms</TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Paragraph>
                The administration of the site reserves the right to change the
                provisions of this privacy policy at any time.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                If the user does not agree with the changes, the user undertakes
                to immediately cease all interaction with the website.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                The site shall not be liable for damages or losses incurred by
                the user or third parties as a result of misunderstanding or
                misunderstanding the provisions of the privacy policy.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                The user, by entering his/her personal data or by providing this
                data in any other way, or by performing actions on the website,
                agrees to the privacy policy and authorises the website as well
                as third party service providers to process his/her data.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                Users may provide data themselves by posting on the website,
                communicating via telephone channels or to an email or postal
                address, or data may be provided from other sources, such as
                feedback, ratings, comments, confirmations of information or
                other information from third parties provided as part of a
                claim, complaint or dispute, or information from publicly
                available sources on the internet.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                The user may not use the{" "}
                <ParagraphSpan>sdproduction.org</ParagraphSpan> website if they
                do not agree to the terms of the privacy policy and must stop
                using the website.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                The user acknowledges that in case of his negligence in security
                and protection of his data and data for authorisation, such as
                password, login, third parties may gain unauthorised access to
                his account and user data.{" "}
                <ParagraphSpanWithUnderLine>
                  The site is not liable for damages caused by such access.
                </ParagraphSpanWithUnderLine>
              </Paragraph>
            </Li>
          </List>
        </Section>
        <FooterContainer>
          <FooterEN showImg/>
        </FooterContainer>
      </Container>
    </>
  );
};
