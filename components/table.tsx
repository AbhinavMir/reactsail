import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible";

// Data type for table rows
const tableData = [
  {
    description: "Create a new user account",
    instruction: "Fill out the user information form",
    notes: "Verify the new user account",
    details: [
      {
        description: "Navigate to the 'Users' section of the dashboard and click the 'Add User' button.",
        instruction: [
          "Enter the user's name, email, and password.",
          "Select the user's role and permissions.",
          "Click the 'Create User' button to save the new account."
        ],
        notes: "Verify that the user can log in with the provided credentials."
      }
    ]
  },
];

function CollapsibleDetail({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex items-center justify-between w-full">
        <span>{title}</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

function TableComponent() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Instruction</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <CollapsibleDetail title={item.description}>
                  <p>{item.details[0].description}</p>
                </CollapsibleDetail>
              </TableCell>
              <TableCell>
                <CollapsibleDetail title={item.instruction}>
                  <ol className="list-decimal list-inside">
                    {item.details[0].instruction.map((step, i) => <li key={i}>{step}</li>)}
                  </ol>
                </CollapsibleDetail>
              </TableCell>
              <TableCell>
                <CollapsibleDetail title={item.notes}>
                  <p>{item.details[0].notes}</p>
                </CollapsibleDetail>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export { TableComponent };
