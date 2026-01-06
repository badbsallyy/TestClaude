import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung und Informationen zum Datenschutz bei DealsHub.",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung?</strong>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen.
          </p>

          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong>
            <br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
            ein Kontaktformular eingeben.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei Vercel Inc., 440 N
            Barranca Avenue #4133, Covina, CA 91723, USA (nachfolgend &quot;Vercel&quot;).
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p>
            DealsHub GmbH
            <br />
            Musterstraße 123
            <br />
            12345 Musterstadt
            <br />
            E-Mail: kontakt@dealshub.de
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>

          <h3>Cookies</h3>
          <p>
            Unsere Internetseiten verwenden so genannte &quot;Cookies&quot;. Cookies sind
            kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.
            Sie werden entweder vorübergehend für die Dauer einer Sitzung
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
            Endgerät gespeichert.
          </p>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert.
          </p>

          <h2>5. Newsletter</h2>
          <p>
            Wenn Sie den auf der Website angebotenen Newsletter beziehen
            möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie
            Informationen, welche uns die Überprüfung gestatten, dass Sie der
            Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des
            Newsletters einverstanden sind.
          </p>

          <h2>6. Affiliate-Links</h2>
          <p>
            Diese Website enthält Affiliate-Links zu externen Shops. Wenn Sie
            über diese Links einen Kauf tätigen, erhalten wir eine Provision.
            Für Sie entstehen dadurch keine zusätzlichen Kosten.
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen.
          </p>
        </div>
      </div>
    </div>
  );
}
