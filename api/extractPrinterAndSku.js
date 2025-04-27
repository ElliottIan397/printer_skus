export default function handler(req, res) {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Missing text" });
  }

  // Updated parsing for real bot output format
  const modelMatch = text.match(/For your (.*?), I found/);
  const skuMatch = text.match(/SKUs?: (.*?)(\.|$)/i);

  const printerModel = modelMatch ? modelMatch[1].trim() : "";
  const skuList = skuMatch ? skuMatch[1].trim() : "";

  res.status(200).json({
    printer_model: printerModel,
    sku_list: skuList
  });
}
