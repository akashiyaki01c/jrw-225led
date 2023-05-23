// See https://aka.ms/new-console-template for more information

using var reader = new StreamReader("data");
var rows = reader.ReadToEnd().Split("\n");

var stas = new List<Station>();
foreach (var row in rows)
{
    System.Console.WriteLine(row);
    var data = row.Split("\t");

    var isDisplay = data[4] != "";

    stas.Add(new(
        int.Parse(data[0]),
        int.Parse(data[1]),
        data[2],
        data[3],
        isDisplay
    ));
}

using var writer = new StreamWriter("output.data");
System.Text.Json.JsonSerializer.Serialize<List<Station>>(writer.BaseStream, stas);

record Station(int row, int column, string name, string line, bool isDisplay);