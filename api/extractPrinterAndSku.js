export default function handler(req, res) {
  const { text } = req.body;

  // Very basic parsing
  const modelMatch = text.match(/Printer Model:\s*(.*?)\s*SKU List:/i);
  const skuMatch = text.match(/SKU List:\s*(.*)/i);

  const printerModel = modelMatch ? modelMatch[1].trim() : "";
  const skuList = skuMatch ? skuMatch[1].trim() : "";

  res.status(200).json({
    printer_model: printerModel,
    sku_list: skuList
  });
}
