import React from "react";
import { HeaderDE } from "../../components/header/HeaderDE";
import { FooterDE } from "../../components/footer/FooterDE";
import ArrowLeft from "../../assets/svg/ArrowLeft.svg";
import {
  TitleHTwo,
  TitleSpan,
  BackButton,
  Container,
  Paragraph,
  ParagraphSpan,
  List,
  Section,
  Line,
  ParagraphSpanWithUnderLine,
  Li,
} from "../styles/privacy.styled";

export const PrivacyDE = () => {
  return (
    <>
      <HeaderDE name={"/en/privacy"} />
      <Container>
        <BackButton to="/">
          <img src={ArrowLeft} alt="arrow" />
          Zurück zum Startbildschirm
        </BackButton>

        <TitleHTwo>Datenschutz</TitleHTwo>
        <List>
          <Li>
            <Paragraph>
              <ParagraphSpan>SD Production</ParagraphSpan> (im Folgenden "wir",
              "uns" oder "unser") respektiert die Privatsphäre der Nutzer (im
              Folgenden "Sie" oder "Nutzer") und unternimmt alle Anstrengungen,
              die persönlichen Daten, die Sie uns zur Verfügung stellen, zu
              schützen. Diese Datenschutzrichtlinie beschreibt unsere Praktiken
              in Bezug auf die Erfassung, Verwendung und Offenlegung Ihrer Daten
              bei der Nutzung unserer Websites, Anwendungen und Dienste
              (zusammenfassend als "Daten" bezeichnet).
            </Paragraph>
          </Li>
          <Li>
            <Paragraph>
              <ParagraphSpan class="colorSpan">Daten</ParagraphSpan> sind alle
              Informationen, die sich direkt oder indirekt auf die Nutzer der
              Website beziehen.
            </Paragraph>
          </Li>
        </List>

        {/* 2 */}
        <Section>
          <TitleHTwo>
            Persönliche <TitleSpan>Daten</TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Line />
              <Paragraph>
                Vollständiger Name, Telefonnummer, E-Mail Adresse.
              </Paragraph>
            </Li>

            <Li>
              <Line />
              <Paragraph>
                Nutzerinformationen bei der Beauftragung von Dienstleistungen
                auf der Website.
              </Paragraph>
            </Li>

            <Li>
              <Line />
              <Paragraph>
                Daten über Geräte und deren Nutzung: IP-Adresse, Uhrzeit, Datum
                der Nutzung der Website durch den Nutzer, Software, sowie
                Browser, Betriebssystem und andere Daten, die der Nutzer
                preisgibt.
              </Paragraph>
            </Li>

            <Li>
              <Line />
              <Paragraph>
                Daten aus Umfragen zur Verbesserung der Dienstleistungen für die
                Nutzer; Informationen, die die Website im Rahmen von
                Marketingaktivitäten erhält.
              </Paragraph>
            </Li>

            <Li>
              <Line />
              <Paragraph>
                Informationen, die von Nutzern auf der Grundlage der Ergebnisse
                ihrer Dienste, Rückmeldungen, Kommentare, Supportanfragen,
                Beschwerden, Klagen und sonstigen Anfragen veröffentlicht
                werden.
              </Paragraph>
            </Li>
          </List>
        </Section>
        {/* 3 */}
        <Section>
          <TitleHTwo>
            Verwendung von Cookies und
            <TitleSpan>
              <br /> Andere Technologie
            </TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Paragraph>
                <ParagraphSpan class="colorSpan">Cookies</ParagraphSpan> oder
                <ParagraphSpan class="colorSpan"> Kekse</ParagraphSpan> sind
                kleine Dateneinheiten, die an den Computer des Nutzers gesendet
                werden, wenn Sie eine Webseite besuchen oder ein Werbemodul auf
                einer Webseite ansehen, und die auf dem Computer oder Mobilgerät
                des Nutzers gespeichert werden.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                <ParagraphSpan class="colorSpan">Pixel</ParagraphSpan> oder{" "}
                <ParagraphSpan class="colorSpan">Zählpixel</ParagraphSpan> sind
                digitale Bilder, ein Element der Anzeigenmatrix, die das Bild
                bilden. Sie können verwendet werden, um zu verfolgen, wie oft
                ein Nutzer eine Webseite nutzt, um den Browser des Nutzers zu
                identifizieren und um Dienste anzubieten. So werden z. B. Daten
                im Einkaufswagen zwischen den Besuchen gespeichert und vom
                Benutzer ausgelöste Website-Fehler verhindert, wobei alle
                Informationen "wie sie sind" verarbeitet und während der
                Datenerfassung nicht verändert werden.
              </Paragraph>
            </Li>
          </List>
        </Section>
        {/* 4 */}
        <Section>
          <TitleHTwo>
            Verwendung und Zweck der
            <TitleSpan>
              <br />
              Datenverarbeitung
            </TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Paragraph>
                Die Website verwendet und verarbeitet die Daten, um die
                Funktionen, Befugnisse und Pflichten zu erfüllen, die der
                Website gemäß <ParagraphSpan>der geltenden </ParagraphSpan>
                <ParagraphSpan>ukrainischen Gesetzgebung</ParagraphSpan>{" "}
                zugewiesen sind, und um die Verwirklichung der zivilen,
                wirtschaftlichen und steuerlichen Beziehungen zu gewährleisten.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                <ParagraphSpanWithUnderLine>
                  Die Website verarbeitet keine Daten, die sich auf Rasse,
                  Nationalität, politische Meinungen, religiöse oder andere
                  Überzeugungen oder die Mitgliedschaft in öffentlichen
                  Vereinigungen beziehen. Informationen über die physiologischen
                  Merkmale des Nutzers, die zu seiner Identifizierung verwendet
                  werden können, werden nicht verarbeitet.
                </ParagraphSpanWithUnderLine>
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                Die Bedingungen für die Datenverarbeitung und -speicherung
                werden auf der Grundlage des Zwecks der Datenverarbeitung sowie
                auf der Grundlage der in den mit den Nutzern geschlossenen
                Verträgen festgelegten Bedingungen in Übereinstimmung mit den
                Anforderungen{" "}
                <ParagraphSpan>
                  der geltenden Gesetzgebung der Ukraine festgelegt.
                </ParagraphSpan>
              </Paragraph>
            </Li>
          </List>
        </Section>

        <Section>
          <TitleHTwo>
            Bedingungen für die Gewährung{" "}
            <TitleSpan>
              <br /> Zugang zu den Daten
            </TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Paragraph>
                Die Daten werden nicht an Dritte weitergegeben oder ohne die
                Zustimmung des Nutzers verbreitet, außer in{" "}
                <ParagraphSpan>
                  den vom geltenden ukrainischen Recht{" "}
                </ParagraphSpan>
                vorgesehenen Fällen und nur im Interesse der nationalen
                Sicherheit, des wirtschaftlichen Wohls und der Menschenrechte,
                insbesondere, aber nicht ausschließlich:
              </Paragraph>
            </Li>
            <Li>
              <Line />
              <Paragraph>
                Auf begründete Anfragen von Behörden, die berechtigt sind,
                solche Daten anzufordern und zu erhalten.
              </Paragraph>
            </Li>
            <Li>
              <Line />
              <Paragraph>
                Wenn der Nutzer nach Ansicht der Website-Verwaltung gegen die
                Bestimmungen dieser Politik oder andere zwischen der Website und
                dem Nutzer geschlossene Verträge und Vereinbarungen sowie gegen
                die Bestimmungen der Nutzungsvereinbarung verstößt.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                Die Website behält sich das Recht vor, Daten mit staatlichen
                Behörden gemäß den Anforderungen{" "}
                <ParagraphSpan>
                  der geltenden Gesetzgebung der Ukraine
                </ParagraphSpan>{" "}
                auszutauschen, um Betrug auf der Website zu verhindern,
                Streitigkeiten beizulegen und Umstände zu klären, die zu einer
                Verletzung der geltenden Gesetzgebung der Ukraine führen
                könnten.
              </Paragraph>
            </Li>
          </List>
        </Section>

        {/* 5 */}
        <Section>
          <TitleHTwo>
            Datenschutz in
            <TitleSpan>
              <br />
              SD Production
            </TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Paragraph>
                Wendet bei der Datenverarbeitung die erforderlichen technischen,
                organisatorischen und rechtlichen Maßnahmen an, um die Daten vor
                unbefugtem oder unrechtmäßigem Zugriff, einschließlich Änderung,
                Löschung, Bereitstellung, Verbreitung und anderen unrechtmäßigen
                Handlungen zu schützen.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                Der Standort muss die getroffenen Sicherheitsmaßnahmen
                kontinuierlich überwachen.
              </Paragraph>
            </Li>
          </List>
        </Section>
        {/* 6 */}
        <Section>
          <TitleHTwo>
            Zusätzliche <TitleSpan>Bedingungen</TitleSpan>
          </TitleHTwo>
          <List>
            <Li>
              <Paragraph>
                Die Verwaltung der Website behält sich das Recht vor, die
                Bestimmungen der vorliegenden Datenschutzpolitik jederzeit zu
                ändern.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                Wenn der Nutzer mit den Änderungen nicht einverstanden ist,
                verpflichtet er sich, die Interaktion mit der Website
                unverzüglich einzustellen.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                Die Website haftet nicht für Schäden oder Verluste, die dem
                Nutzer oder Dritten infolge eines Missverständnisses oder einer
                Fehlinterpretation der Bestimmungen der Datenschutzpolitik
                entstehen.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                Durch die Eingabe seiner persönlichen Daten oder durch die
                Angabe dieser Daten auf andere Weise oder durch die Ausführung
                von Aktionen auf der Website erklärt sich der Nutzer mit der
                Datenschutzpolitik einverstanden und ermächtigt die Website
                sowie Drittdienstleister zur Verarbeitung seiner Daten.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                Die Nutzer können selbst Daten bereitstellen, indem sie auf der
                Website posten, über Telefonkanäle oder an eine E-Mail- oder
                Postadresse kommunizieren, oder sie können Daten aus anderen
                Quellen bereitstellen, z. B. Feedback, Bewertungen, Kommentare,
                Bestätigungen von Informationen oder andere Informationen von
                Dritten, die im Rahmen einer Forderung, einer Beschwerde oder
                eines Rechtsstreits bereitgestellt werden, oder Informationen
                aus öffentlich zugänglichen Quellen im Internet.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                Der Nutzer darf die Website{" "}
                <ParagraphSpan>sdproduction.org</ParagraphSpan>{" "}
                nicht nutzen, wenn er mit den Bedingungen der
                Datenschutzrichtlinie nicht einverstanden ist, und muss die
                Nutzung der Website einstellen.
              </Paragraph>
            </Li>
            <Li>
              <Paragraph>
                Der Nutzer erkennt an, dass im Falle seiner Nachlässigkeit bei
                der Sicherheit und dem Schutz seiner Daten und
                Autorisierungsdaten, wie z.B. Passwort, Login, Dritte unbefugten
                Zugang zu seinem Konto und seinen Nutzerdaten erhalten können.{" "}
                <ParagraphSpanWithUnderLine>
                  Die Website haftet nicht für Schäden, die durch einen solchen
                  Zugang verursacht werden.
                </ParagraphSpanWithUnderLine>
              </Paragraph>
            </Li>
          </List>
        </Section>
        <FooterDE showImg/>
      </Container>
    </>
  );
};
