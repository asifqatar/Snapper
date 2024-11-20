/**
 * Generates an HTML report from the given findings.
 *
 * @param {any[]} findings - An array of findings to include in the report. Each finding should have the following properties:
 *   - type: The type of the finding.
 *   - description: A description of the finding.
 *   - position: An object containing the file path and line number of the finding.
 *   - riskRating: The risk rating of the finding.
 * @returns {string} - The generated HTML report as a string.
 */
export function generateHtmlReport(findings: any[]): string {
  const tableRows = findings
    .map(
      (finding) => `
        <tr>
          <td>${finding.type}</td>
          <td>${finding.description}</td>
          <td>${finding.position.filePath}</td>
          <td>${finding.position.lineNum}</td>
          <td>${finding.riskRating}</td>
        </tr>`
    )
    .join("");

  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Findings Report</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h1>Findings Report</h1>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>File Path</th>
              <th>Line Number</th>
              <th>Risk Rating</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </body>
      </html>
    `;
}
