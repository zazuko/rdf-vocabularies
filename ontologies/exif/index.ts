/* This file was automatically generated. Do not edit by hand. */

const {
  ns1,
  dc11,
  exif,
  rdf,
  rdfs,
  ns6,
  dcterms,
  owl,
  foaf,
  ns10,
  ns11,
  ns12
} = {
  'ns1': 'http://tsc.jeita.or.jp/avs/data/',
  'dc11': 'http://purl.org/dc/elements/1.1/',
  'exif': 'http://www.w3.org/2003/12/exif/ns#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ns6': 'http://www.w3.org/2003/12/exif/',
  'dcterms': 'http://purl.org/dc/terms/',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'foaf': 'http://xmlns.com/foaf/0.1/',
  'ns10': 'http://www.kanzaki.com/info/',
  'ns11': 'http://example.org/',
  'ns12': 'http://www.kanzaki.com/test/'
}

export default ({ blankNode, literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  const blankNodes: import('rdf-js').BlankNode[] = []
  for (let i = 0; i < 1; i++) {
    blankNodes.push(blankNode())
  }

  return [
    quad(
      namedNode(`${ns1}cp3451.pdf`),
      namedNode(`${dc11}format`),
      literal(`PDF`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${ns1}cp3451.pdf`),
      namedNode(`${dc11}title`),
      literal(`JEITA CP-3451/EXIF 2.2 Specification`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}IFD`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}IFD`),
      namedNode(`${rdfs}comment`),
      literal(`An Image File Directory`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}IFD`),
      namedNode(`${rdfs}label`),
      literal(`IFD`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}_unknown`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}_unknown`),
      namedNode(`${rdfs}comment`),
      literal(`An Exif tag whose meaning is not known`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}_unknown`),
      namedNode(`${rdfs}label`),
      literal(`Unknown tag`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}apertureValue`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}apertureValue`),
      namedNode(`${rdfs}comment`),
      literal(`The lens aperture. The unit is the APEX value.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}apertureValue`),
      namedNode(`${rdfs}comment`),
      literal(`レンズ絞り値（APEX値）。この値のルート2のベキ乗を取ると、通常の絞り値となる。例えば'5'の場合だと√2^5=F5.6`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}apertureValue`),
      namedNode(`${rdfs}label`),
      literal(`ApertureValue`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}apertureValue`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}apertureValue`),
      namedNode(`${exif}tagNumber`),
      literal(`37378`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}artist`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}artist`),
      namedNode(`${rdfs}comment`),
      literal(`Person who created the image`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}artist`),
      namedNode(`${rdfs}label`),
      literal(`Artist`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}artist`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dc11}creator`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}artist`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}artist`),
      namedNode(`${exif}tagNumber`),
      literal(`315`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}bitsPerSample`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}bitsPerSample`),
      namedNode(`${rdfs}comment`),
      literal(`The number of bits per image component. In this standard each component of the image is 8 bits, so the value for this tag is 8. See also SamplesPerPixel. In JPEG compressed data a JPEG marker is used instead of this tag.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}bitsPerSample`),
      namedNode(`${rdfs}label`),
      literal(`BitsPerSample`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}bitsPerSample`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}bitsPerSample`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}resolution`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}bitsPerSample`),
      namedNode(`${exif}tagNumber`),
      literal(`258`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}brightnessValue`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}brightnessValue`),
      namedNode(`${rdfs}comment`),
      literal(`The value of brightness. The unit is the APEX value. Ordinarily it is given in the range of -99.99 to 99.99. Note that if the numerator of the recorded value is FFFFFFFF.H, Unknown shall be indicated.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}brightnessValue`),
      namedNode(`${rdfs}comment`),
      literal(`画像撮影時の撮影対象物の明るさ（APEX値）。EVにするにはISO感度の値を足す必要があり、Ev:Exposure, Bv:BrightnessValue, Sv:SensitivityValueとしてEv=Bv+Sv Sv=log^2(ISOSpeedRating/3.125)という計算式を使う。ISO感度100の場合Sv=5、ISO200の場合Sv=6、ISO125ではSv=5.32`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}brightnessValue`),
      namedNode(`${rdfs}label`),
      literal(`BrightnessValue`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}brightnessValue`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}brightnessValue`),
      namedNode(`${exif}tagNumber`),
      literal(`37379`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}cfaPattern`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}cfaPattern`),
      namedNode(`${rdfs}comment`),
      literal(`CCDに付いているColor filter array(CFA)のパターン。例えば普通のRGBフィルターだと、CFAPatternのデータは 02 02 00 01 01 02`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}cfaPattern`),
      namedNode(`${rdfs}comment`),
      literal(`The color filter array (CFA) geometric pattern of the image sensor when a one-chip color area sensor is used. It does not apply to all sensing methods.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}cfaPattern`),
      namedNode(`${rdfs}label`),
      literal(`CFAPattern`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}cfaPattern`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}cfaPattern`),
      namedNode(`${exif}tagNumber`),
      literal(`41730`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}colorSpace`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}colorSpace`),
      namedNode(`${rdfs}comment`),
      literal(`The color space information tag (ColorSpace) is always recorded as the color space specifier. Normally sRGB (=1) is used to define the color space based on the PC monitor conditions and environment.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}colorSpace`),
      namedNode(`${rdfs}comment`),
      literal(`使われる色空間。通常sRGB`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}colorSpace`),
      namedNode(`${rdfs}label`),
      literal(`ColorSpace`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}colorSpace`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataCharacter`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}colorSpace`),
      namedNode(`${exif}tagNumber`),
      literal(`40961`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}componentsConfiguration`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}componentsConfiguration`),
      namedNode(`${rdfs}comment`),
      literal(`Information specific to compressed data. The channels of each component are arranged in order from the 1st component to the 4th. For uncompressed data the data arrangement is given in the PhotometricInterpretation tag. However, since PhotometricInterpretation can only express the order of Y,Cb and Cr, this tag is provided for cases when compressed data uses components other than Y, Cb, and Cr and to enable support of other sequences.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}componentsConfiguration`),
      namedNode(`${rdfs}comment`),
      literal(`圧縮データがYCC以外の並びの場合、4バイトでその並びを示す。それぞれの値は0:not exist,1:Y,2:Cb,3:Cr,4:R,5:G,6:B`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}componentsConfiguration`),
      namedNode(`${rdfs}label`),
      literal(`ComponentsConfiguration`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}componentsConfiguration`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageConfig`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}componentsConfiguration`),
      namedNode(`${exif}tagNumber`),
      literal(`37121`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}compressedBitsPerPixel`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}compressedBitsPerPixel`),
      namedNode(`${rdfs}comment`),
      literal(`Information specific to compressed data. The compression mode used for a compressed image is indicated in unit bits per pixel.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}compressedBitsPerPixel`),
      namedNode(`${rdfs}comment`),
      literal(`画像の圧縮率`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}compressedBitsPerPixel`),
      namedNode(`${rdfs}label`),
      literal(`CompressedBitsPerPixel`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}compressedBitsPerPixel`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageConfig`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}compressedBitsPerPixel`),
      namedNode(`${exif}tagNumber`),
      literal(`37122`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}compression`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}compression`),
      namedNode(`${rdfs}comment`),
      literal(`The compression scheme used for the image data. When a primary image is JPEG compressed, this designation is not necessary and is omitted. When thumbnails use JPEG compression, this tag value is set to 6.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}compression`),
      namedNode(`${rdfs}label`),
      literal(`Compression`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}compression`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}compression`),
      namedNode(`${exif}tagNumber`),
      literal(`259`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}contrast`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}contrast`),
      namedNode(`${rdfs}comment`),
      literal(`The direction of contrast processing applied by the camera when the image was shot.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}contrast`),
      namedNode(`${rdfs}label`),
      literal(`Contrast`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}contrast`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}contrast`),
      namedNode(`${exif}tagNumber`),
      literal(`41992`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}copyright`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}copyright`),
      namedNode(`${rdfs}comment`),
      literal(`Copyright information. In this standard the tag is used to indicate both the photographer and editor copyrights. It is the copyright notice of the person or organization claiming rights to the image.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}copyright`),
      namedNode(`${rdfs}comment`),
      literal(`この画像の撮影者および編集者の著作権情報`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}copyright`),
      namedNode(`${rdfs}label`),
      literal(`Copyright`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}copyright`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dc11}rights`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}copyright`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}copyright`),
      namedNode(`${exif}tagNumber`),
      literal(`33432`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}customRendered`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}customRendered`),
      namedNode(`${rdfs}comment`),
      literal(`The use of special processing on image data, such as rendering geared to output. When special processing is performed, the reader is expected to disable or minimize any further processing.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}customRendered`),
      namedNode(`${rdfs}comment`),
      literal(`特別なレンダリング処理を行っているかどうか`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}customRendered`),
      namedNode(`${rdfs}label`),
      literal(`CustomRendered`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}customRendered`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}customRendered`),
      namedNode(`${exif}tagNumber`),
      literal(`41985`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}datatype`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}datatype`),
      namedNode(`${rdfs}comment`),
      literal(`The Exif field data type, such as ascii, byte, short etc.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}datatype`),
      namedNode(`${rdfs}label`),
      literal(`Data Type`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}datatype`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dc11}type`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}date`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}date`),
      namedNode(`${rdfs}comment`),
      literal(`a date information. Usually saved as YYYY:MM:DD (HH:MM:SS) format in Exif data, but represented here as W3C-DTF format`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}date`),
      namedNode(`${rdfs}label`),
      literal(`Date`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}date`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dc11}date`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateAndOrTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateAndOrTime`),
      namedNode(`${rdfs}comment`),
      literal(`An attribute relating to Date and/or Time`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateAndOrTime`),
      namedNode(`${rdfs}label`),
      literal(`Date and/or Time`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateAndOrTime`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTime`),
      namedNode(`${rdfs}comment`),
      literal(`The date and time of image creation. In this standard it is the date and time the file was changed.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTime`),
      namedNode(`${rdfs}comment`),
      literal(`この画像が作成（あるいは最後に変更された）日時。通常はDateTimeOriginaと同じ値`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTime`),
      namedNode(`${rdfs}label`),
      literal(`DateTime`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTime`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}date`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTime`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTime`),
      namedNode(`${exif}tagNumber`),
      literal(`306`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeDigitized`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeDigitized`),
      namedNode(`${rdfs}comment`),
      literal(`The date and time when the image was stored as digital data. If, for example, an image was captured by DSC and at the same time the file was recorded, then the DateTimeOriginal and DateTimeDigitized will have the same contents.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeDigitized`),
      namedNode(`${rdfs}comment`),
      literal(`画像がデジタル化された日時。デジカメ画像なら通常DateTimeOriginalと同じ値`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeDigitized`),
      namedNode(`${rdfs}label`),
      literal(`DateTimeDigitized`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeDigitized`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}date`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeDigitized`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}dateAndOrTime`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeDigitized`),
      namedNode(`${exif}tagNumber`),
      literal(`36868`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeOriginal`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeOriginal`),
      namedNode(`${rdfs}comment`),
      literal(`The date and time when the original image data was generated. For a DSC the date and time the picture was taken are recorded.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeOriginal`),
      namedNode(`${rdfs}comment`),
      literal(`オリジナル画像が作成（撮影）された日時`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeOriginal`),
      namedNode(`${rdfs}label`),
      literal(`DateTimeOriginal`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeOriginal`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}date`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeOriginal`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}dateAndOrTime`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}dateTimeOriginal`),
      namedNode(`${exif}tagNumber`),
      literal(`36867`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}deviceSettingDescription`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}deviceSettingDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Information on the picture-taking conditions of a particular camera model. The tag is used only to indicate the picture-taking conditions in the reader.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}deviceSettingDescription`),
      namedNode(`${rdfs}label`),
      literal(`DeviceSettingDescription`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}deviceSettingDescription`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}deviceSettingDescription`),
      namedNode(`${exif}tagNumber`),
      literal(`41995`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}digitalZoomRatio`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}digitalZoomRatio`),
      namedNode(`${rdfs}comment`),
      literal(`The digital zoom ratio when the image was shot. If the numerator of the recorded value is 0, this indicates that digital zoom was not used.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}digitalZoomRatio`),
      namedNode(`${rdfs}comment`),
      literal(`デジタルズームが使われた場合、その比率`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}digitalZoomRatio`),
      namedNode(`${rdfs}label`),
      literal(`DigitalZoomRatio`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}digitalZoomRatio`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}digitalZoomRatio`),
      namedNode(`${exif}tagNumber`),
      literal(`41988`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifAttribute`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifAttribute`),
      namedNode(`${rdfs}comment`),
      literal(`A property that connects an IFD to one of its entries. Super property which integrates all Exif tags.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifAttribute`),
      namedNode(`${rdfs}domain`),
      namedNode(`${exif}IFD`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifAttribute`),
      namedNode(`${rdfs}label`),
      literal(`Exif Attribute`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifVersion`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifVersion`),
      namedNode(`${rdfs}comment`),
      literal(`Exif Version`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifVersion`),
      namedNode(`${rdfs}comment`),
      literal(`Exif形式のバージョン`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifVersion`),
      namedNode(`${rdfs}label`),
      literal(`ExifVersion`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifVersion`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}versionInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifVersion`),
      namedNode(`${exif}tagNumber`),
      literal(`36864`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exif_IFD_Pointer`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exif_IFD_Pointer`),
      namedNode(`${rdfs}comment`),
      literal(`A pointer to the Exif IFD, which is a set of tags for recording Exif-specific attribute information.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exif_IFD_Pointer`),
      namedNode(`${rdfs}comment`),
      literal(`Exif IFDへのポインタ`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exif_IFD_Pointer`),
      namedNode(`${rdfs}label`),
      literal(`Exif IFD Pointer`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exif_IFD_Pointer`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}ifdPointer`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exif_IFD_Pointer`),
      namedNode(`${exif}tagNumber`),
      literal(`34665`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifdata`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifdata`),
      namedNode(`${rdfs}comment`),
      literal(`An Exif IFD data entry`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exifdata`),
      namedNode(`${rdfs}label`),
      literal(`Exif data`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureBiasValue`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureBiasValue`),
      namedNode(`${rdfs}comment`),
      literal(`The exposure bias. The unit is the APEX value. Ordinarily it is given in the range of -99.99 to 99.99.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureBiasValue`),
      namedNode(`${rdfs}comment`),
      literal(`撮影時の露光補正量。単位はAPEX値(EV)`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureBiasValue`),
      namedNode(`${rdfs}label`),
      literal(`ExposureBiasValue`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureBiasValue`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureBiasValue`),
      namedNode(`${exif}tagNumber`),
      literal(`37380`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureIndex`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureIndex`),
      namedNode(`${rdfs}comment`),
      literal(`CCD感度。データ形式が符号なし分数である事を除き、ISOSpeedRatingsと同じ`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureIndex`),
      namedNode(`${rdfs}comment`),
      literal(`The exposure index selected on the camera or input device at the time the image is captured.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureIndex`),
      namedNode(`${rdfs}label`),
      literal(`ExposureIndex`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureIndex`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureIndex`),
      namedNode(`${exif}tagNumber`),
      literal(`41493`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureMode`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureMode`),
      namedNode(`${rdfs}comment`),
      literal(`the exposure mode set when the image was shot. In auto-bracketing mode, the camera shoots a series of frames of the same scene at different exposure settings.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureMode`),
      namedNode(`${rdfs}comment`),
      literal(`露光モード`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureMode`),
      namedNode(`${rdfs}label`),
      literal(`ExposureMode`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureMode`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureMode`),
      namedNode(`${exif}tagNumber`),
      literal(`41986`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureProgram`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureProgram`),
      namedNode(`${rdfs}comment`),
      literal(`The class of the program used by the camera to set exposure when the picture is taken.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureProgram`),
      namedNode(`${rdfs}comment`),
      literal(`露光制御のモード`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureProgram`),
      namedNode(`${rdfs}label`),
      literal(`ExposureProgram`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureProgram`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureProgram`),
      namedNode(`${exif}tagNumber`),
      literal(`34850`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureTime`),
      namedNode(`${rdfs}comment`),
      literal(`Exposure time, given in seconds (sec).`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureTime`),
      namedNode(`${rdfs}comment`),
      literal(`露光時間（シャッター速度の逆数）。単位は秒`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureTime`),
      namedNode(`${rdfs}label`),
      literal(`ExposureTime`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureTime`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureTime`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}seconds`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}exposureTime`),
      namedNode(`${exif}tagNumber`),
      literal(`33434`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fNumber`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fNumber`),
      namedNode(`${rdfs}comment`),
      literal(`F number`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fNumber`),
      namedNode(`${rdfs}comment`),
      literal(`レンズのF値`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fNumber`),
      namedNode(`${rdfs}label`),
      literal(`FNumber`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fNumber`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fNumber`),
      namedNode(`${exif}tagNumber`),
      literal(`33437`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fileSource`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fileSource`),
      namedNode(`${rdfs}comment`),
      literal(`The image source. If a DSC recorded the image, this tag value of this tag always be set to 3, indicating that the image was recorded on a DSC.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fileSource`),
      namedNode(`${rdfs}comment`),
      literal(`画像がどういうデバイスから得られたか。通常3=DSC`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fileSource`),
      namedNode(`${rdfs}label`),
      literal(`FileSource`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fileSource`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}fileSource`),
      namedNode(`${exif}tagNumber`),
      literal(`41728`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flash`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flash`),
      namedNode(`${rdfs}comment`),
      literal(`The status of flash when the image was shot.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flash`),
      namedNode(`${rdfs}comment`),
      literal(`フラッシュ発光の状態`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flash`),
      namedNode(`${rdfs}label`),
      literal(`Flash`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flash`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flash`),
      namedNode(`${exif}tagNumber`),
      literal(`37385`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flashEnergy`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flashEnergy`),
      namedNode(`${rdfs}comment`),
      literal(`BCPSによるストロボの強度`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flashEnergy`),
      namedNode(`${rdfs}comment`),
      literal(`The strobe energy at the time the image is captured, as measured in Beam Candle Power Seconds (BCPS).`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flashEnergy`),
      namedNode(`${rdfs}label`),
      literal(`FlashEnergy`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flashEnergy`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flashEnergy`),
      namedNode(`${exif}tagNumber`),
      literal(`41483`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flashpixVersion`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flashpixVersion`),
      namedNode(`${rdfs}comment`),
      literal(`The Flashpix format version supported by a FPXR file. If the FPXR function supports Flashpix format Ver. 1.0, this is indicated similarly to ExifVersion by recording "0100" as 4-byte ASCII.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flashpixVersion`),
      namedNode(`${rdfs}label`),
      literal(`FlashpixVersion`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flashpixVersion`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}versionInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}flashpixVersion`),
      namedNode(`${exif}tagNumber`),
      literal(`40960`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLength`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLength`),
      namedNode(`${rdfs}comment`),
      literal(`The actual focal length of the lens, in mm. Conversion is not made to the focal length of a 35 mm film camera.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLength`),
      namedNode(`${rdfs}comment`),
      literal(`レンズの焦点距離。単位はmm`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLength`),
      namedNode(`${rdfs}label`),
      literal(`FocalLength`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLength`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}mm`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLength`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLength`),
      namedNode(`${exif}tagNumber`),
      literal(`37386`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLengthIn35mmFilm`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLengthIn35mmFilm`),
      namedNode(`${rdfs}comment`),
      literal(`35mm換算した焦点距離`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLengthIn35mmFilm`),
      namedNode(`${rdfs}comment`),
      literal(`The equivalent focal length assuming a 35mm film camera, in mm. A value of 0 means the focal length is unknown. Note that this tag differs from the FocalLength tag.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLengthIn35mmFilm`),
      namedNode(`${rdfs}label`),
      literal(`FocalLengthIn35mmFilm`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLengthIn35mmFilm`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}length`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLengthIn35mmFilm`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalLengthIn35mmFilm`),
      namedNode(`${exif}tagNumber`),
      literal(`41989`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneResolutionUnit`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneResolutionUnit`),
      namedNode(`${rdfs}comment`),
      literal(`CCD画素密度の単位`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneResolutionUnit`),
      namedNode(`${rdfs}comment`),
      literal(`The unit for measuring FocalPlaneXResolution and FocalPlaneYResolution. This value is the same as the ResolutionUnit.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneResolutionUnit`),
      namedNode(`${rdfs}label`),
      literal(`FocalPlaneResolutionUnit`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneResolutionUnit`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneResolutionUnit`),
      namedNode(`${exif}tagNumber`),
      literal(`41488`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneXResolution`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneXResolution`),
      namedNode(`${rdfs}comment`),
      literal(`The number of pixels in the image width (X) direction per FocalPlaneResolutionUnit on the camera focal plane.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneXResolution`),
      namedNode(`${rdfs}comment`),
      literal(`撮影画像のCCD位置での水平解像度。この値とFocalPlaneYResolution、FocalLengthを使うと、レンズ焦点距離の35mmカメラ換算値が計算できる。例えば200万画素機を使いVGAモードの画像を撮ったような場合はこの値はVGAの解像度でリサンプルされた値になっており、CCDの画素ピッチそのままの値ではないので注意が必要`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneXResolution`),
      namedNode(`${rdfs}label`),
      literal(`FocalPlaneXResolution`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneXResolution`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneXResolution`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}resolution`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneXResolution`),
      namedNode(`${exif}tagNumber`),
      literal(`41486`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneYResolution`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneYResolution`),
      namedNode(`${rdfs}comment`),
      literal(`The number of pixels in the image height (Y) direction per FocalPlaneResolutionUnit on the camera focal plane.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneYResolution`),
      namedNode(`${rdfs}comment`),
      literal(`撮影画像のCCD位置での垂直解像度`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneYResolution`),
      namedNode(`${rdfs}label`),
      literal(`FocalPlaneYResolution`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneYResolution`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneYResolution`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}resolution`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}focalPlaneYResolution`),
      namedNode(`${exif}tagNumber`),
      literal(`41487`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gainControl`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gainControl`),
      namedNode(`${rdfs}comment`),
      literal(`The degree of overall image gain adjustment.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gainControl`),
      namedNode(`${rdfs}label`),
      literal(`GainControl`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gainControl`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gainControl`),
      namedNode(`${exif}tagNumber`),
      literal(`41991`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}geo`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}geo`),
      namedNode(`${rdfs}comment`),
      literal(`Geometric data such as latitude, longitude and altitude. Usually saved as rational number.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}geo`),
      namedNode(`${rdfs}label`),
      literal(`Geometric data`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAltitude`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAltitude`),
      namedNode(`${rdfs}comment`),
      literal(`The altitude based on the reference in GPSAltitudeRef. Altitude is expressed as one RATIONAL value. The reference unit is meters.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAltitude`),
      namedNode(`${rdfs}label`),
      literal(`GPSAltitude`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAltitude`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}geo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAltitude`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAltitude`),
      namedNode(`${exif}tagNumber`),
      literal(`6`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAltitudeRef`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAltitudeRef`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates the altitude used as the reference altitude. If the reference is sea level and the altitude is above sea level, 0 is given. If the altitude is below sea level, a value of 1 is given and the altitude is indicated as an absolute value in the GPSAltitude tag. The reference unit is meters.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAltitudeRef`),
      namedNode(`${rdfs}label`),
      literal(`GPSAltitudeRef`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAltitudeRef`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAltitudeRef`),
      namedNode(`${exif}tagNumber`),
      literal(`5`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAreaInformation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAreaInformation`),
      namedNode(`${rdfs}comment`),
      literal(`A character string recording the name of the GPS area. The first byte indicates the character code used, and this is followed by the name of the GPS area.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAreaInformation`),
      namedNode(`${rdfs}label`),
      literal(`GPSAreaInformation`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAreaInformation`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsAreaInformation`),
      namedNode(`${exif}tagNumber`),
      literal(`28`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDOP`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDOP`),
      namedNode(`${rdfs}comment`),
      literal(`The GPS DOP (data degree of precision). An HDOP value is written during two-dimensional measurement, and PDOP during three-dimensional measurement.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDOP`),
      namedNode(`${rdfs}label`),
      literal(`GPSDOP`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDOP`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDOP`),
      namedNode(`${exif}tagNumber`),
      literal(`11`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDateStamp`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDateStamp`),
      namedNode(`${rdfs}comment`),
      literal(`date and time information relative to UTC (Coordinated Universal Time). The record format is "YYYY:MM:DD" while converted to W3C-DTF to use in RDF`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDateStamp`),
      namedNode(`${rdfs}label`),
      literal(`GPSDateStamp`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDateStamp`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}date`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDateStamp`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDateStamp`),
      namedNode(`${exif}tagNumber`),
      literal(`29`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestBearing`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestBearing`),
      namedNode(`${rdfs}comment`),
      literal(`The bearing to the destination point. The range of values is from 0.00 to 359.99.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestBearing`),
      namedNode(`${rdfs}label`),
      literal(`GPSDestBearing`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestBearing`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestBearing`),
      namedNode(`${exif}tagNumber`),
      literal(`24`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestBearingRef`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestBearingRef`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates the reference used for giving the bearing to the destination point. 'T' denotes true direction and 'M' is magnetic direction.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestBearingRef`),
      namedNode(`${rdfs}label`),
      literal(`GPSDestBearingRef`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestBearingRef`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestBearingRef`),
      namedNode(`${exif}tagNumber`),
      literal(`23`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestDistance`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestDistance`),
      namedNode(`${rdfs}comment`),
      literal(`The distance to the destination point.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestDistance`),
      namedNode(`${rdfs}label`),
      literal(`GPSDestDistance`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestDistance`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestDistance`),
      namedNode(`${exif}tagNumber`),
      literal(`26`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestDistanceRef`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestDistanceRef`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates the unit used to express the distance to the destination point. 'K', 'M' and 'N' represent kilometers, miles and knots.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestDistanceRef`),
      namedNode(`${rdfs}label`),
      literal(`GPSDestDistanceRef`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestDistanceRef`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestDistanceRef`),
      namedNode(`${exif}tagNumber`),
      literal(`25`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLatitude`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLatitude`),
      namedNode(`${rdfs}comment`),
      literal(`Latitude of destination, expressed as three values giving the degrees, minutes, and seconds, respectively.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLatitude`),
      namedNode(`${rdfs}label`),
      literal(`GPSDestLatitude`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLatitude`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}geo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLatitude`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLatitude`),
      namedNode(`${exif}tagNumber`),
      literal(`20`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLatitudeRef`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLatitudeRef`),
      namedNode(`${rdfs}comment`),
      literal(`Reference for latitude of destination`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLatitudeRef`),
      namedNode(`${rdfs}label`),
      literal(`GPSDestLatitudeRef`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLatitudeRef`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLatitudeRef`),
      namedNode(`${exif}tagNumber`),
      literal(`19`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLongitude`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLongitude`),
      namedNode(`${rdfs}comment`),
      literal(`Longitude of destination, expressed as three values giving the degrees, minutes, and seconds, respectively.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLongitude`),
      namedNode(`${rdfs}label`),
      literal(`GPSDestLongitude`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLongitude`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}geo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLongitude`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLongitude`),
      namedNode(`${exif}tagNumber`),
      literal(`22`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLongitudeRef`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLongitudeRef`),
      namedNode(`${rdfs}comment`),
      literal(`Reference for longitude of destination`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLongitudeRef`),
      namedNode(`${rdfs}label`),
      literal(`GPSDestLongitudeRef`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLongitudeRef`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDestLongitudeRef`),
      namedNode(`${exif}tagNumber`),
      literal(`21`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDifferential`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDifferential`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates whether differential correction is applied to the GPS receiver.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDifferential`),
      namedNode(`${rdfs}label`),
      literal(`GPSDifferential`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDifferential`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsDifferential`),
      namedNode(`${exif}tagNumber`),
      literal(`30`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsImgDirection`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsImgDirection`),
      namedNode(`${rdfs}comment`),
      literal(`The direction of the image when it was captured. The range of values is from 0.00 to 359.99.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsImgDirection`),
      namedNode(`${rdfs}label`),
      literal(`GPSImgDirection`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsImgDirection`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsImgDirection`),
      namedNode(`${exif}tagNumber`),
      literal(`17`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsImgDirectionRef`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsImgDirectionRef`),
      namedNode(`${rdfs}comment`),
      literal(`The reference for giving the direction of the image when it is captured. 'T' denotes true direction and 'M' is magnetic direction.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsImgDirectionRef`),
      namedNode(`${rdfs}label`),
      literal(`GPSImgDirectionRef`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsImgDirectionRef`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsImgDirectionRef`),
      namedNode(`${exif}tagNumber`),
      literal(`16`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsInfo`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsInfo`),
      namedNode(`${rdfs}comment`),
      literal(`An attribute relating to GPS information`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsInfo`),
      namedNode(`${rdfs}label`),
      literal(`GPS Info`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsInfo`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsInfo_IFD_Pointer`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsInfo_IFD_Pointer`),
      namedNode(`${rdfs}comment`),
      literal(`A pointer to the GPS IFD, which is a set of tags for recording GPS information.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsInfo_IFD_Pointer`),
      namedNode(`${rdfs}comment`),
      literal(`GPS IFDへのポインタ`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsInfo_IFD_Pointer`),
      namedNode(`${rdfs}label`),
      literal(`GPSInfo IFD Pointer`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsInfo_IFD_Pointer`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}ifdPointer`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsInfo_IFD_Pointer`),
      namedNode(`${exif}tagNumber`),
      literal(`34853`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitude`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitude`),
      namedNode(`${rdfs}comment`),
      literal(`The latitude, expressed as three values giving the degrees, minutes, and seconds, respectively.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitude`),
      namedNode(`${rdfs}comment`),
      literal(`緯度`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitude`),
      namedNode(`${rdfs}label`),
      literal(`GPSLatitude`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitude`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}geo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitude`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitude`),
      namedNode(`${exif}tagNumber`),
      literal(`2`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitudeRef`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitudeRef`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates whether the latitude is north or south latitude. The ASCII value 'N' indicates north latitude, and 'S' is south latitude.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitudeRef`),
      namedNode(`${rdfs}comment`),
      literal(`緯度の北緯もしくは南緯`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitudeRef`),
      namedNode(`${rdfs}label`),
      literal(`GPSLatitudeRef`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitudeRef`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLatitudeRef`),
      namedNode(`${exif}tagNumber`),
      literal(`1`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitude`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitude`),
      namedNode(`${rdfs}comment`),
      literal(`The longitude, expressed as three values giving the degrees, minutes, and seconds, respectively.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitude`),
      namedNode(`${rdfs}comment`),
      literal(`経度`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitude`),
      namedNode(`${rdfs}label`),
      literal(`GPSLongitude`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitude`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}geo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitude`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitude`),
      namedNode(`${exif}tagNumber`),
      literal(`4`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitudeRef`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitudeRef`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates whether the longitude is east or west longitude. ASCII 'E' indicates east longitude, and 'W' is west longitude.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitudeRef`),
      namedNode(`${rdfs}comment`),
      literal(`経度の東経もしくは西経`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitudeRef`),
      namedNode(`${rdfs}label`),
      literal(`GPSLongitudeRef`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitudeRef`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsLongitudeRef`),
      namedNode(`${exif}tagNumber`),
      literal(`3`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsMapDatum`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsMapDatum`),
      namedNode(`${rdfs}comment`),
      literal(`The geodetic survey data used by the GPS receiver. If the survey data is restricted to Japan, the value of this tag is 'TOKYO' or 'WGS-84'. If a GPS Info tag is recorded, it is strongly recommended that this tag be recorded.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsMapDatum`),
      namedNode(`${rdfs}comment`),
      literal(`測地系。日本なら'TOKYO'もしくは'WGS-84'`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsMapDatum`),
      namedNode(`${rdfs}label`),
      literal(`GPSMapDatum`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsMapDatum`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsMapDatum`),
      namedNode(`${exif}tagNumber`),
      literal(`18`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsMeasureMode`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsMeasureMode`),
      namedNode(`${rdfs}comment`),
      literal(`The GPS measurement mode. '2' means two-dimensional measurement and '3' means three-dimensional measurement is in progress.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsMeasureMode`),
      namedNode(`${rdfs}label`),
      literal(`GPSMeasureMode`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsMeasureMode`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsMeasureMode`),
      namedNode(`${exif}tagNumber`),
      literal(`10`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsProcessingMethod`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsProcessingMethod`),
      namedNode(`${rdfs}comment`),
      literal(`A character string recording the name of the method used for location finding. The first byte indicates the character code used, and this is followed by the name of the method.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsProcessingMethod`),
      namedNode(`${rdfs}label`),
      literal(`GPSProcessingMethod`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsProcessingMethod`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsProcessingMethod`),
      namedNode(`${exif}tagNumber`),
      literal(`27`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSatellites`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSatellites`),
      namedNode(`${rdfs}comment`),
      literal(`The GPS satellites used for measurements. This tag can be used to describe the number of satellites, their ID number, angle of elevation, azimuth, SNR and other information in ASCII notation. The format is not specified. If the GPS receiver is incapable of taking measurements, value of the tag shall be set to NULL.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSatellites`),
      namedNode(`${rdfs}label`),
      literal(`GPSSatellites`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSatellites`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSatellites`),
      namedNode(`${exif}tagNumber`),
      literal(`8`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSpeed`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSpeed`),
      namedNode(`${rdfs}comment`),
      literal(`The speed of GPS receiver movement.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSpeed`),
      namedNode(`${rdfs}label`),
      literal(`GPSSpeed`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSpeed`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSpeed`),
      namedNode(`${exif}tagNumber`),
      literal(`13`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSpeedRef`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSpeedRef`),
      namedNode(`${rdfs}comment`),
      literal(`The unit used to express the GPS receiver speed of movement. 'K' 'M' and 'N' represents kilometers per hour, miles per hour, and knots.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSpeedRef`),
      namedNode(`${rdfs}label`),
      literal(`GPSSpeedRef`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSpeedRef`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsSpeedRef`),
      namedNode(`${exif}tagNumber`),
      literal(`12`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsStatus`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsStatus`),
      namedNode(`${rdfs}comment`),
      literal(`The status of the GPS receiver when the image is recorded. 'A' means measurement is in progress, and 'V' means the measurement is Interoperability.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsStatus`),
      namedNode(`${rdfs}label`),
      literal(`GPSStatus`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsStatus`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsStatus`),
      namedNode(`${exif}tagNumber`),
      literal(`9`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTimeStamp`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTimeStamp`),
      namedNode(`${rdfs}comment`),
      literal(`The time as UTC (Coordinated Universal Time). TimeStamp is expressed as three RATIONAL values giving the hour, minute, and second.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTimeStamp`),
      namedNode(`${rdfs}label`),
      literal(`GPSTimeStamp`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTimeStamp`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTimeStamp`),
      namedNode(`${exif}tagNumber`),
      literal(`7`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTrack`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTrack`),
      namedNode(`${rdfs}comment`),
      literal(`The direction of GPS receiver movement. The range of values is from 0.00 to 359.99.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTrack`),
      namedNode(`${rdfs}label`),
      literal(`GPSTrack`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTrack`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTrack`),
      namedNode(`${exif}tagNumber`),
      literal(`15`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTrackRef`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTrackRef`),
      namedNode(`${rdfs}comment`),
      literal(`The reference for giving the direction of GPS receiver movement. 'T' denotes true direction and 'M' is magnetic direction.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTrackRef`),
      namedNode(`${rdfs}label`),
      literal(`GPSTrackRef`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTrackRef`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsTrackRef`),
      namedNode(`${exif}tagNumber`),
      literal(`14`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsVersionID`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsVersionID`),
      namedNode(`${rdfs}comment`),
      literal(`The version of GPSInfoIFD. The version is given as 2.2.0.0. This tag is mandatory when GPSInfo tag is present.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsVersionID`),
      namedNode(`${rdfs}label`),
      literal(`GPSVersionID`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsVersionID`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}gpsInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsVersionID`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}versionInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}gpsVersionID`),
      namedNode(`${exif}tagNumber`),
      literal(`0`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}height`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}height`),
      namedNode(`${rdfs}comment`),
      literal(`Height of an object`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}height`),
      namedNode(`${rdfs}label`),
      literal(`Height`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}height`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}length`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}ifdPointer`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}ifdPointer`),
      namedNode(`${rdfs}comment`),
      literal(`A tag that refers a child IFD`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}ifdPointer`),
      namedNode(`${rdfs}label`),
      literal(`IFD Pointer`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}ifdPointer`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageConfig`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageConfig`),
      namedNode(`${rdfs}comment`),
      literal(`An attribute relating to Image Configuration`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageConfig`),
      namedNode(`${rdfs}label`),
      literal(`Image Config`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageConfig`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDataCharacter`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDataCharacter`),
      namedNode(`${rdfs}comment`),
      literal(`An attribute relating to image data characteristics`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDataCharacter`),
      namedNode(`${rdfs}label`),
      literal(`Image Data Character`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDataCharacter`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDataStruct`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDataStruct`),
      namedNode(`${rdfs}comment`),
      literal(`An attribute relating to image data structure`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDataStruct`),
      namedNode(`${rdfs}label`),
      literal(`Image Data Structure`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDataStruct`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDescription`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDescription`),
      namedNode(`${rdfs}comment`),
      literal(`A character string giving the title of the image. It may be a comment such as "1988 company picnic" or the like. Two-byte character codes cannot be used. When a 2-byte code is necessary, the Exif Private tag UserComment is to be used.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDescription`),
      namedNode(`${rdfs}comment`),
      literal(`この画像についての説明。漢字等の2バイト文字の使用は禁止`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDescription`),
      namedNode(`${rdfs}label`),
      literal(`ImageDescription`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDescription`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dc11}title`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDescription`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageDescription`),
      namedNode(`${exif}tagNumber`),
      literal(`270`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageLength`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageLength`),
      namedNode(`${rdfs}comment`),
      literal(`Image height. The number of rows of image data. In JPEG compressed data a JPEG marker is used.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageLength`),
      namedNode(`${rdfs}label`),
      literal(`ImageLength`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageLength`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}height`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageLength`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageLength`),
      namedNode(`${exif}tagNumber`),
      literal(`257`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageUniqueID`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageUniqueID`),
      namedNode(`${rdfs}comment`),
      literal(`An identifier assigned uniquely to each image. It is recorded as an ASCII string equivalent to hexadecimal notation and 128-bit fixed length.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageUniqueID`),
      namedNode(`${rdfs}label`),
      literal(`ImageUniqueID`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageUniqueID`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dc11}identifier`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageUniqueID`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageUniqueID`),
      namedNode(`${exif}tagNumber`),
      literal(`42016`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageWidth`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageWidth`),
      namedNode(`${rdfs}comment`),
      literal(`Image width. The number of columns of image data, equal to the number of pixels per row. In JPEG compressed data a JPEG marker is used instead of this tag.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageWidth`),
      namedNode(`${rdfs}label`),
      literal(`ImageWidth`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageWidth`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageWidth`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}width`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}imageWidth`),
      namedNode(`${exif}tagNumber`),
      literal(`256`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interopInfo`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interopInfo`),
      namedNode(`${rdfs}comment`),
      literal(`An attribute relating to Interoperability. Tags stored in
Interoperability IFD may be defined dependently to each Interoperability rule.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interopInfo`),
      namedNode(`${rdfs}label`),
      literal(`Interoperability Info`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interopInfo`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityIndex`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityIndex`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates the identification of the Interoperability rule. 'R98' = conforming to R98 file specification of Recommended Exif Interoperability Rules (ExifR98) or to DCF basic file stipulated by Design Rule for Camera File System. 'THM' = conforming to DCF thumbnail file stipulated by Design rule for Camera File System.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityIndex`),
      namedNode(`${rdfs}comment`),
      literal(`メイン画像のInteroperability IFDで、データの内容がExifR98 v1.0準拠の場合は、'R98'の文字列。サムネィル画像のInteroperability IFDの場合は、'THM'の文字列`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityIndex`),
      namedNode(`${rdfs}label`),
      literal(`InteroperabilityIndex`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityIndex`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}interopInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityIndex`),
      namedNode(`${exif}tagNumber`),
      literal(`1`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityVersion`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityVersion`),
      namedNode(`${rdfs}comment`),
      literal(`Interoperability Version`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityVersion`),
      namedNode(`${rdfs}comment`),
      literal(`データの内容がExifR98 v1.0準拠の場合は、'0100'の文字列。`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityVersion`),
      namedNode(`${rdfs}label`),
      literal(`InteroperabilityVersion`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityVersion`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}interopInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperabilityVersion`),
      namedNode(`${exif}tagNumber`),
      literal(`2`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperability_IFD_Pointer`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperability_IFD_Pointer`),
      namedNode(`${rdfs}comment`),
      literal(`A pointer to the Interoperability IFD, which is composed of tags storing the information to ensure the Interoperability`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperability_IFD_Pointer`),
      namedNode(`${rdfs}comment`),
      literal(`Interoperability IFDへのポインタ`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperability_IFD_Pointer`),
      namedNode(`${rdfs}label`),
      literal(`Interoperability IFD Pointer`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperability_IFD_Pointer`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}ifdPointer`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}interoperability_IFD_Pointer`),
      namedNode(`${exif}tagNumber`),
      literal(`40965`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}isoSpeedRatings`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}isoSpeedRatings`),
      namedNode(`${rdfs}comment`),
      literal(`CCD感度の銀塩フィルム換算値`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}isoSpeedRatings`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates the ISO Speed and ISO Latitude of the camera or input device as specified in ISO 12232.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}isoSpeedRatings`),
      namedNode(`${rdfs}label`),
      literal(`ISOSpeedRatings`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}isoSpeedRatings`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}isoSpeedRatings`),
      namedNode(`${exif}tagNumber`),
      literal(`34855`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormat`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormat`),
      namedNode(`${rdfs}comment`),
      literal(`The offset to the start byte (SOI) of JPEG compressed thumbnail data. This is not used for primary image JPEG data.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormat`),
      namedNode(`${rdfs}comment`),
      literal(`圧縮されたサムネイルへのオフセット`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormat`),
      namedNode(`${rdfs}label`),
      literal(`JPEGInterchangeFormat`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormat`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}recOffset`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormat`),
      namedNode(`${exif}tagNumber`),
      literal(`513`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormatLength`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormatLength`),
      namedNode(`${rdfs}comment`),
      literal(`The number of bytes of JPEG compressed thumbnail data. This is not used for primary image JPEG data.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormatLength`),
      namedNode(`${rdfs}comment`),
      literal(`圧縮されたサムネイルのサイズ`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormatLength`),
      namedNode(`${rdfs}label`),
      literal(`JPEGInterchangeFormatLength`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormatLength`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}recOffset`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}jpegInterchangeFormatLength`),
      namedNode(`${exif}tagNumber`),
      literal(`514`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}length`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}length`),
      namedNode(`${rdfs}comment`),
      literal(`Length of an object. Could be a subProperty of other general schema.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}length`),
      namedNode(`${rdfs}label`),
      literal(`Length`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}lightSource`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}lightSource`),
      namedNode(`${rdfs}comment`),
      literal(`Light source such as Daylight, Tungsten, Flash etc.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}lightSource`),
      namedNode(`${rdfs}comment`),
      literal(`光源。これはマニュアルでホワイトバランスを設定した場合のモード値となる`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}lightSource`),
      namedNode(`${rdfs}label`),
      literal(`LightSource`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}lightSource`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}lightSource`),
      namedNode(`${exif}tagNumber`),
      literal(`37384`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}make`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}make`),
      namedNode(`${rdfs}comment`),
      literal(`Manufacturer of image input equipment`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}make`),
      namedNode(`${rdfs}comment`),
      literal(`カメラのメーカー名。DCFでは必須`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}make`),
      namedNode(`${rdfs}label`),
      literal(`Make`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}make`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}label`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}make`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}make`),
      namedNode(`${exif}tagNumber`),
      literal(`271`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}makerNote`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}makerNote`),
      namedNode(`${rdfs}comment`),
      literal(`Manufacturer notes`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}makerNote`),
      namedNode(`${rdfs}comment`),
      literal(`カメラの内部情報等、メーカー依存データ`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}makerNote`),
      namedNode(`${rdfs}label`),
      literal(`MakerNote`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}makerNote`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}userInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}makerNote`),
      namedNode(`${exif}tagNumber`),
      literal(`37500`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}maxApertureValue`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}maxApertureValue`),
      namedNode(`${rdfs}comment`),
      literal(`The smallest F number of the lens. The unit is the APEX value. Ordinarily it is given in the range of 00.00 to 99.99, but it is not limited to this range.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}maxApertureValue`),
      namedNode(`${rdfs}comment`),
      literal(`レンズの開放F値。ApertureValue同様、ルート2のベキ乗を取ると通常の絞り値に換算できる`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}maxApertureValue`),
      namedNode(`${rdfs}label`),
      literal(`MaxApertureValue`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}maxApertureValue`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}maxApertureValue`),
      namedNode(`${exif}tagNumber`),
      literal(`37381`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}meter`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}meter`),
      namedNode(`${rdfs}comment`),
      literal(`A length with unit of meter`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}meter`),
      namedNode(`${rdfs}label`),
      literal(`Meter`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}meter`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}length`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}meteringMode`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}meteringMode`),
      namedNode(`${rdfs}comment`),
      literal(`Metering mode, such as CenterWeightedAverage, Spot, MultiSpot,Pattern, Partial etc.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}meteringMode`),
      namedNode(`${rdfs}comment`),
      literal(`自動露出の測光モード`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}meteringMode`),
      namedNode(`${rdfs}label`),
      literal(`MeteringMode`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}meteringMode`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}meteringMode`),
      namedNode(`${exif}tagNumber`),
      literal(`37383`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}mm`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}mm`),
      namedNode(`${rdfs}comment`),
      literal(`A length with unit of mm`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}mm`),
      namedNode(`${rdfs}label`),
      literal(`Milimeter`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}mm`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}length`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}model`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}model`),
      namedNode(`${rdfs}comment`),
      literal(`Model of image input equipment`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}model`),
      namedNode(`${rdfs}comment`),
      literal(`カメラの機種名。DCFでは必須`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}model`),
      namedNode(`${rdfs}label`),
      literal(`Model`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}model`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}label`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}model`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}model`),
      namedNode(`${exif}tagNumber`),
      literal(`272`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}oecf`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}oecf`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates the Opto-Electric Conversion Function (OECF) specified in ISO 14524. OECF is the relationship between the camera optical input and the image values.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}oecf`),
      namedNode(`${rdfs}label`),
      literal(`OECF`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}oecf`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}oecf`),
      namedNode(`${exif}tagNumber`),
      literal(`34856`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}orientation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}orientation`),
      namedNode(`${rdfs}comment`),
      literal(`The image orientation viewed in terms of rows and columns.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}orientation`),
      namedNode(`${rdfs}comment`),
      literal(`画像データがどこ(top-leftなど）を起点として、どの向きで格納されているか`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}orientation`),
      namedNode(`${rdfs}label`),
      literal(`Orientation`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}orientation`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}orientation`),
      namedNode(`${exif}tagNumber`),
      literal(`274`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}photometricInterpretation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}photometricInterpretation`),
      namedNode(`${rdfs}comment`),
      literal(`Pixel composition. In JPEG compressed data a JPEG marker is used instead of this tag.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}photometricInterpretation`),
      namedNode(`${rdfs}label`),
      literal(`PhotometricInterpretation`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}photometricInterpretation`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}photometricInterpretation`),
      namedNode(`${exif}tagNumber`),
      literal(`262`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pictTaking`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pictTaking`),
      namedNode(`${rdfs}comment`),
      literal(`An attribute relating to Picture-Taking Conditions`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pictTaking`),
      namedNode(`${rdfs}label`),
      literal(`PictTaking`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pictTaking`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimBrightness`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimBrightness`),
      namedNode(`${rdfs}comment`),
      literal(`Brightness info for print image matching`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimBrightness`),
      namedNode(`${rdfs}label`),
      literal(`PrintIM Brightness`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimBrightness`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pimInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimBrightness`),
      namedNode(`${exif}tagNumber`),
      literal(`10`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimColorBalance`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimColorBalance`),
      namedNode(`${rdfs}comment`),
      literal(`ColorBalance info for print image matching`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimColorBalance`),
      namedNode(`${rdfs}label`),
      literal(`PrintIM ColorBalance`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimColorBalance`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pimInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimColorBalance`),
      namedNode(`${exif}tagNumber`),
      literal(`11`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimContrast`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimContrast`),
      namedNode(`${rdfs}comment`),
      literal(`Contrast info for print image matching`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimContrast`),
      namedNode(`${rdfs}label`),
      literal(`PrintIM Contrast`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimContrast`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pimInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimContrast`),
      namedNode(`${exif}tagNumber`),
      literal(`9`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimInfo`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimInfo`),
      namedNode(`${rdfs}comment`),
      literal(`An attribute relating to print image matching`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimInfo`),
      namedNode(`${rdfs}label`),
      literal(`PIM Info`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimInfo`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimSaturation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimSaturation`),
      namedNode(`${rdfs}comment`),
      literal(`Saturation info for print image matching`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimSaturation`),
      namedNode(`${rdfs}label`),
      literal(`PrintIM Saturation`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimSaturation`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pimInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimSaturation`),
      namedNode(`${exif}tagNumber`),
      literal(`12`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimSharpness`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimSharpness`),
      namedNode(`${rdfs}comment`),
      literal(`Sharpness info for print image matching`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimSharpness`),
      namedNode(`${rdfs}label`),
      literal(`PrintIM Sharpness`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimSharpness`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pimInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pimSharpness`),
      namedNode(`${exif}tagNumber`),
      literal(`13`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelXDimension`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelXDimension`),
      namedNode(`${rdfs}comment`),
      literal(`Information specific to compressed data. When a compressed file is recorded, the valid width of the meaningful image shall be recorded in this tag, whether or not there is padding data or a restart marker. This tag should not exist in an uncompressed file.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelXDimension`),
      namedNode(`${rdfs}label`),
      literal(`PixelXDimension`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelXDimension`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageConfig`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelXDimension`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}width`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelXDimension`),
      namedNode(`${exif}tagNumber`),
      literal(`40962`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelYDimension`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelYDimension`),
      namedNode(`${rdfs}comment`),
      literal(`Information specific to compressed data. When a compressed file is recorded, the valid height of the meaningful image shall be recorded in this tag, whether or not there is padding data or a restart marker. This tag should not exist in an uncompressed file. Since data padding is unnecessary in the vertical direction, the number of lines recorded in this valid image height tag will in fact be the same as that recorded in the SOF.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelYDimension`),
      namedNode(`${rdfs}label`),
      literal(`PixelYDimension`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelYDimension`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}height`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelYDimension`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageConfig`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}pixelYDimension`),
      namedNode(`${exif}tagNumber`),
      literal(`40963`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}planarConfiguration`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}planarConfiguration`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates whether pixel components are recorded in chunky or planar format. In JPEG compressed files a JPEG marker is used instead of this tag. If this field does not exist, the TIFF default of 1 (chunky) is assumed.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}planarConfiguration`),
      namedNode(`${rdfs}label`),
      literal(`PlanarConfiguration`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}planarConfiguration`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}planarConfiguration`),
      namedNode(`${exif}tagNumber`),
      literal(`284`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}primaryChromaticities`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}primaryChromaticities`),
      namedNode(`${rdfs}comment`),
      literal(`The chromaticity of the three primary colors of the image. Normally this tag is not necessary, since color space is specified in the color space information tag (ColorSpace).`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}primaryChromaticities`),
      namedNode(`${rdfs}comment`),
      literal(`原色の色度。CCIR REcommendation 709 primariesを使っている場合は、'640/1000,330/1000,300/1000,600/1000,150/1000,60/1000'という値。通常はColorSpaceタグがあるので不要`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}primaryChromaticities`),
      namedNode(`${rdfs}label`),
      literal(`PrimaryChromaticities`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}primaryChromaticities`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataCharacter`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}primaryChromaticities`),
      namedNode(`${exif}tagNumber`),
      literal(`319`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}printImageMatching_IFD_Pointer`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}printImageMatching_IFD_Pointer`),
      namedNode(`${rdfs}comment`),
      literal(`A pointer to the print image matching IFD`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}printImageMatching_IFD_Pointer`),
      namedNode(`${rdfs}label`),
      literal(`PrintImageMatching IFD Pointer`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}printImageMatching_IFD_Pointer`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}ifdPointer`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}printImageMatching_IFD_Pointer`),
      namedNode(`${exif}tagNumber`),
      literal(`50341`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}recOffset`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}recOffset`),
      namedNode(`${rdfs}comment`),
      literal(`An attribute relating to recording offset`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}recOffset`),
      namedNode(`${rdfs}label`),
      literal(`Recording Offset`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}recOffset`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}referenceBlackWhite`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}referenceBlackWhite`),
      namedNode(`${rdfs}comment`),
      literal(`The reference black point value and reference white point value. The color space is declared in a color space information tag, with the default being the value that gives the optimal image characteristics Interoperability these conditions.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}referenceBlackWhite`),
      namedNode(`${rdfs}comment`),
      literal(`画像情報の黒点・白点値。YCbCr形式の場合、最初の２つの値がY(輝度)の黒点・白点、次がCb、最後がCrとなり、デフォルト値は'0,255,0,128,0,128'。RGB形式の場合はR、G、Bの順で黒点・白点値が並んでおり、デフォルト値は'0,255,0,255,0,255'。`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}referenceBlackWhite`),
      namedNode(`${rdfs}label`),
      literal(`ReferenceBlackWhite`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}referenceBlackWhite`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataCharacter`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}referenceBlackWhite`),
      namedNode(`${exif}tagNumber`),
      literal(`532`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedFile`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedFile`),
      namedNode(`${rdfs}comment`),
      literal(`Tag Relating to Related File Information`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedFile`),
      namedNode(`${rdfs}label`),
      literal(`Related File`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedFile`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageFileFormat`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageFileFormat`),
      namedNode(`${rdfs}comment`),
      literal(`Related image file format`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageFileFormat`),
      namedNode(`${rdfs}comment`),
      literal(`画像フォーマットを'Exif JPEG Ver. 2.1'などの文字列で示す。通常はサムネィル画像に使う`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageFileFormat`),
      namedNode(`${rdfs}label`),
      literal(`RelatedImageFileFormat`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageFileFormat`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}interopInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageFileFormat`),
      namedNode(`${exif}tagNumber`),
      literal(`4096`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageLength`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageLength`),
      namedNode(`${rdfs}comment`),
      literal(`Related image length`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageLength`),
      namedNode(`${rdfs}comment`),
      literal(`画像高。通常はサムネイル画像のInteroperability IFDに使う`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageLength`),
      namedNode(`${rdfs}label`),
      literal(`RelatedImageLength`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageLength`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}height`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageLength`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}interopInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageLength`),
      namedNode(`${exif}tagNumber`),
      literal(`4098`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageWidth`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageWidth`),
      namedNode(`${rdfs}comment`),
      literal(`Related image width`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageWidth`),
      namedNode(`${rdfs}comment`),
      literal(`画像幅。通常はサムネイル画像のInteroperability IFDに使う`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageWidth`),
      namedNode(`${rdfs}label`),
      literal(`RelatedImageWidth`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageWidth`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}interopInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageWidth`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}width`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedImageWidth`),
      namedNode(`${exif}tagNumber`),
      literal(`4097`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedSoundFile`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedSoundFile`),
      namedNode(`${rdfs}comment`),
      literal(`Related audio file`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedSoundFile`),
      namedNode(`${rdfs}comment`),
      literal(`画像と一緒に音声録音できる機種の場合に、音声ファイルの名前`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedSoundFile`),
      namedNode(`${rdfs}label`),
      literal(`RelatedSoundFile`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedSoundFile`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}relatedFile`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}relatedSoundFile`),
      namedNode(`${exif}tagNumber`),
      literal(`40964`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}resolution`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}resolution`),
      namedNode(`${rdfs}comment`),
      literal(`a rational number representing a resolution. Could be a subProperty of other general schema.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}resolution`),
      namedNode(`${rdfs}label`),
      literal(`Resolution`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}resolutionUnit`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}resolutionUnit`),
      namedNode(`${rdfs}comment`),
      literal(`The unit for measuring XResolution and YResolution. The same unit is used for both XResolution and YResolution. If the image resolution in unknown, 2 (inches) is designated.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}resolutionUnit`),
      namedNode(`${rdfs}comment`),
      literal(`XResolution/YResolutionの解像度の単位`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}resolutionUnit`),
      namedNode(`${rdfs}label`),
      literal(`ResolutionUnit`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}resolutionUnit`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}resolutionUnit`),
      namedNode(`${exif}tagNumber`),
      literal(`296`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}rowsPerStrip`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}rowsPerStrip`),
      namedNode(`${rdfs}comment`),
      literal(`The number of rows per strip. This is the number of rows in the image of one strip when an image is divided into strips. With JPEG compressed data this designation is not needed and is omitted.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}rowsPerStrip`),
      namedNode(`${rdfs}label`),
      literal(`RowsPerStrip`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}rowsPerStrip`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}recOffset`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}rowsPerStrip`),
      namedNode(`${exif}tagNumber`),
      literal(`278`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}samplesPerPixel`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}samplesPerPixel`),
      namedNode(`${rdfs}comment`),
      literal(`The number of components per pixel. Since this standard applies to RGB and YCbCr images, the value set for this tag is 3. In JPEG compressed data a JPEG marker is used instead of this tag.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}samplesPerPixel`),
      namedNode(`${rdfs}label`),
      literal(`SamplesPerPixel`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}samplesPerPixel`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}samplesPerPixel`),
      namedNode(`${exif}tagNumber`),
      literal(`277`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}saturation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}saturation`),
      namedNode(`${rdfs}comment`),
      literal(`The direction of saturation processing applied by the camera when the image was shot.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}saturation`),
      namedNode(`${rdfs}label`),
      literal(`Saturation`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}saturation`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}saturation`),
      namedNode(`${exif}tagNumber`),
      literal(`41993`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sceneCaptureType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sceneCaptureType`),
      namedNode(`${rdfs}comment`),
      literal(`The type of scene that was shot. It can also be used to record the mode in which the image was shot, such as Landscape, Portrait etc. Note that this differs from the scene type (SceneType) tag.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sceneCaptureType`),
      namedNode(`${rdfs}label`),
      literal(`SceneCaptureType`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sceneCaptureType`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sceneCaptureType`),
      namedNode(`${exif}tagNumber`),
      literal(`41990`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sceneType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sceneType`),
      namedNode(`${rdfs}comment`),
      literal(`The type of scene. If a DSC recorded the image, this tag value shall always be set to 1, indicating that the image was directly photographed.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sceneType`),
      namedNode(`${rdfs}comment`),
      literal(`画像がどうやって撮られたか。デジカメの場合は通常1=A directly photographed image`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sceneType`),
      namedNode(`${rdfs}label`),
      literal(`SceneType`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sceneType`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sceneType`),
      namedNode(`${exif}tagNumber`),
      literal(`41729`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}seconds`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}seconds`),
      namedNode(`${rdfs}comment`),
      literal(`a mesurement of time length with unit of second`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}seconds`),
      namedNode(`${rdfs}label`),
      literal(`Seconds`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sensingMethod`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sensingMethod`),
      namedNode(`${rdfs}comment`),
      literal(`The image sensor type on the camera or input device, such as One-chip color area sensor etc.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sensingMethod`),
      namedNode(`${rdfs}comment`),
      literal(`イメージセンサーの形式。One-chip color area sensor、Color sequential area sensor、Trilinear sensorなど`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sensingMethod`),
      namedNode(`${rdfs}label`),
      literal(`SensingMethod`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sensingMethod`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sensingMethod`),
      namedNode(`${exif}tagNumber`),
      literal(`41495`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sharpness`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sharpness`),
      namedNode(`${rdfs}comment`),
      literal(`The direction of sharpness processing applied by the camera when the image was shot.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sharpness`),
      namedNode(`${rdfs}label`),
      literal(`Sharpness`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sharpness`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}sharpness`),
      namedNode(`${exif}tagNumber`),
      literal(`41994`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}shutterSpeedValue`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}shutterSpeedValue`),
      namedNode(`${rdfs}comment`),
      literal(`Shutter speed. The unit is the APEX (Additive System of Photographic Exposure) setting`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}shutterSpeedValue`),
      namedNode(`${rdfs}comment`),
      literal(`シャッター速度（APEX値）。この値の2のベキ乗をとって逆数にすると、通常のシャッター速度表示になる。例えば'4'の場合だと1/(2^4)=1/16秒`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}shutterSpeedValue`),
      namedNode(`${rdfs}label`),
      literal(`ShutterSpeedValue`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}shutterSpeedValue`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}shutterSpeedValue`),
      namedNode(`${exif}tagNumber`),
      literal(`37377`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}software`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}software`),
      namedNode(`${rdfs}comment`),
      literal(`The name and version of the software or firmware of the camera or image input device used to generate the image.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}software`),
      namedNode(`${rdfs}comment`),
      literal(`デジカメ（もしくは入力機器）の内蔵ソフトウェア/ファームウェアの名称とバージョン`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}software`),
      namedNode(`${rdfs}label`),
      literal(`Software`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}software`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}label`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}software`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}software`),
      namedNode(`${exif}tagNumber`),
      literal(`305`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}spatialFrequencyResponse`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}spatialFrequencyResponse`),
      namedNode(`${rdfs}comment`),
      literal(`This tag records the camera or input device spatial frequency table and SFR values in the direction of image width, image height, and diagonal direction, as specified in ISO 12233.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}spatialFrequencyResponse`),
      namedNode(`${rdfs}label`),
      literal(`SpatialFrequencyResponse`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}spatialFrequencyResponse`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}spatialFrequencyResponse`),
      namedNode(`${exif}tagNumber`),
      literal(`41484`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}spectralSensitivity`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}spectralSensitivity`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates the spectral sensitivity of each channel of the camera used. The tag value is an ASCII string compatible with the standard developed by the ASTM Technical committee.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}spectralSensitivity`),
      namedNode(`${rdfs}label`),
      literal(`SpectralSensitivity`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}spectralSensitivity`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}spectralSensitivity`),
      namedNode(`${exif}tagNumber`),
      literal(`34852`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}stripByteCounts`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}stripByteCounts`),
      namedNode(`${rdfs}comment`),
      literal(`The total number of bytes in each strip. With JPEG compressed data this designation is not needed and is omitted.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}stripByteCounts`),
      namedNode(`${rdfs}label`),
      literal(`StripByteCounts`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}stripByteCounts`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}recOffset`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}stripByteCounts`),
      namedNode(`${exif}tagNumber`),
      literal(`279`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}stripOffsets`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}stripOffsets`),
      namedNode(`${rdfs}comment`),
      literal(`For each strip, the byte offset of that strip. With JPEG compressed data this designation is not needed and is omitted.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}stripOffsets`),
      namedNode(`${rdfs}label`),
      literal(`StripOffsets`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}stripOffsets`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}recOffset`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}stripOffsets`),
      namedNode(`${exif}tagNumber`),
      literal(`273`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTime`),
      namedNode(`${rdfs}comment`),
      literal(`DateTime subseconds`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTime`),
      namedNode(`${rdfs}label`),
      literal(`SubSecTime`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTime`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}dateAndOrTime`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTime`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}subsecond`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTime`),
      namedNode(`${exif}tagNumber`),
      literal(`37520`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeDigitized`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeDigitized`),
      namedNode(`${rdfs}comment`),
      literal(`DateTimeDigitized subseconds`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeDigitized`),
      namedNode(`${rdfs}label`),
      literal(`SubSecTimeDigitized`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeDigitized`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}dateAndOrTime`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeDigitized`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}subsecond`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeDigitized`),
      namedNode(`${exif}tagNumber`),
      literal(`37522`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeOriginal`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeOriginal`),
      namedNode(`${rdfs}comment`),
      literal(`DateTimeOriginal subseconds`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeOriginal`),
      namedNode(`${rdfs}label`),
      literal(`SubSecTimeOriginal`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeOriginal`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}dateAndOrTime`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeOriginal`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}subsecond`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subSecTimeOriginal`),
      namedNode(`${exif}tagNumber`),
      literal(`37521`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectArea`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectArea`),
      namedNode(`${rdfs}comment`),
      literal(`The location and area of the main subject in the overall scene.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectArea`),
      namedNode(`${rdfs}comment`),
      literal(`画面中の主たる被写体の位置。2値によるXY座標、3値による円、4値による長方形座標の3通りの示し方がある`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectArea`),
      namedNode(`${rdfs}label`),
      literal(`SubjectArea`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectArea`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectArea`),
      namedNode(`${exif}tagNumber`),
      literal(`37396`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistance`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistance`),
      namedNode(`${rdfs}comment`),
      literal(`The distance to the subject, given in meters. Note that if the numerator of the recorded value is FFFFFFFF.H, Infinity shall be indicated; and if the numerator is 0, Distance unknown shall be indicated.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistance`),
      namedNode(`${rdfs}comment`),
      literal(`被写体までの距離。単位はm`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistance`),
      namedNode(`${rdfs}label`),
      literal(`SubjectDistance`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistance`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}meter`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistance`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistance`),
      namedNode(`${exif}tagNumber`),
      literal(`37382`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistanceRange`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistanceRange`),
      namedNode(`${rdfs}comment`),
      literal(`The distance to the subject, such as Macro, Close View or Distant View.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistanceRange`),
      namedNode(`${rdfs}label`),
      literal(`SubjectDistanceRange`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistanceRange`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectDistanceRange`),
      namedNode(`${exif}tagNumber`),
      literal(`41996`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectLocation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectLocation`),
      namedNode(`${rdfs}comment`),
      literal(`The location of the main subject in the scene. The value of this tag represents the pixel at the center of the main subject relative to the left edge, prior to rotation processing as per the Rotation tag. The first value indicates the X column number and second indicates the Y row number.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectLocation`),
      namedNode(`${rdfs}comment`),
      literal(`画面中の主要被写体のXY座標`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectLocation`),
      namedNode(`${rdfs}label`),
      literal(`SubjectLocation`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectLocation`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subjectLocation`),
      namedNode(`${exif}tagNumber`),
      literal(`41492`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subseconds`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subseconds`),
      namedNode(`${rdfs}comment`),
      literal(`A tag used to record fractions of seconds for a date property`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}subseconds`),
      namedNode(`${rdfs}label`),
      literal(`Subseconds`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}tag_number`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}tag_number`),
      namedNode(`${rdfs}comment`),
      literal(`The Exif tag number`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}tag_number`),
      namedNode(`${rdfs}label`),
      literal(`Tag number`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}tag_number`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dc11}identifier`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}tagid`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}tagid`),
      namedNode(`${rdfs}comment`),
      literal(`The Exif tag number with context prefix, such as IFD type or maker name`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}tagid`),
      namedNode(`${rdfs}label`),
      literal(`Tag ID`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}tagid`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}tag_number`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}transferFunction`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}transferFunction`),
      namedNode(`${rdfs}comment`),
      literal(`A transfer function for the image, described in tabular style. Normally this tag is not necessary, since color space is specified in the color space information tag (ColorSpace).`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}transferFunction`),
      namedNode(`${rdfs}label`),
      literal(`TransferFunction`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}transferFunction`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataCharacter`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}transferFunction`),
      namedNode(`${exif}tagNumber`),
      literal(`301`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}userComment`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}userComment`),
      namedNode(`${rdfs}comment`),
      literal(`A tag for Exif users to write keywords or comments on the image besides those in ImageDescription, and without the character code limitations of the ImageDescription tag. The character code used in the UserComment tag is identified based on an ID code in a fixed 8-byte area at the start of the tag data area.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}userComment`),
      namedNode(`${rdfs}comment`),
      literal(`ユーザーコメント。ImageDescriptionタグと違って、こちらはJIS2バイトコード、Unicode等での記述が許されており、最初の8バイトが文字コード`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}userComment`),
      namedNode(`${rdfs}label`),
      literal(`UserComment`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}userComment`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}userInfo`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}userComment`),
      namedNode(`${exif}tagNumber`),
      literal(`37510`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}userInfo`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}userInfo`),
      namedNode(`${rdfs}comment`),
      literal(`An attribute relating to User Information`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}userInfo`),
      namedNode(`${rdfs}label`),
      literal(`User Info`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}userInfo`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}versionInfo`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}versionInfo`),
      namedNode(`${rdfs}comment`),
      literal(`An attribute relating to Version`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}versionInfo`),
      namedNode(`${rdfs}label`),
      literal(`Version Info`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}versionInfo`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}exifAttribute`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whiteBalance`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whiteBalance`),
      namedNode(`${rdfs}comment`),
      literal(`The white balance mode set when the image was shot.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whiteBalance`),
      namedNode(`${rdfs}comment`),
      literal(`ホワイトバランスのモード`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whiteBalance`),
      namedNode(`${rdfs}label`),
      literal(`WhiteBalance`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whiteBalance`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}pictTaking`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whiteBalance`),
      namedNode(`${exif}tagNumber`),
      literal(`41987`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whitePoint`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whitePoint`),
      namedNode(`${rdfs}comment`),
      literal(`The chromaticity of the white point of the image. Normally this tag is not necessary, since color space is specified in the color space information tag (ColorSpace).`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whitePoint`),
      namedNode(`${rdfs}comment`),
      literal(`白点の色度。CIE Standard Illuminant D65(いわゆる昼光色の世界標準値)を使っていれば、'3127/10000,3290/10000'という値。通常はColorSpaceタグがあるので不要`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whitePoint`),
      namedNode(`${rdfs}label`),
      literal(`WhitePoint`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whitePoint`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataCharacter`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}whitePoint`),
      namedNode(`${exif}tagNumber`),
      literal(`318`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}width`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}width`),
      namedNode(`${rdfs}comment`),
      literal(`Width of an object`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}width`),
      namedNode(`${rdfs}label`),
      literal(`Width`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}width`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}length`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}xResolution`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}xResolution`),
      namedNode(`${rdfs}comment`),
      literal(`The number of pixels per ResolutionUnit in the ImageWidth direction. When the image resolution is unknown, 72 [dpi] is designated.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}xResolution`),
      namedNode(`${rdfs}comment`),
      literal(`画像の表示・印刷時の水平解像度`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}xResolution`),
      namedNode(`${rdfs}label`),
      literal(`XResolution`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}xResolution`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}xResolution`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}resolution`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}xResolution`),
      namedNode(`${exif}tagNumber`),
      literal(`282`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrCoefficients`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrCoefficients`),
      namedNode(`${rdfs}comment`),
      literal(`RGB形式からYCbCr形式に変換するための3つの係数。通常は0.299、0.587、0.114という値`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrCoefficients`),
      namedNode(`${rdfs}comment`),
      literal(`The matrix coefficients for transformation from RGB to YCbCr image data.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrCoefficients`),
      namedNode(`${rdfs}label`),
      literal(`YCbCrCoefficients`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrCoefficients`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataCharacter`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrCoefficients`),
      namedNode(`${exif}tagNumber`),
      literal(`529`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrPositioning`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrPositioning`),
      namedNode(`${rdfs}comment`),
      literal(`The position of chrominance components in relation to the luminance component. This field is designated only for JPEG compressed data or uncompressed YCbCr data.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrPositioning`),
      namedNode(`${rdfs}comment`),
      literal(`色情報のサンプリングを間引きしている場合に、色情報のサンプルポイントが��こになるか。1='centered'なら点集合の中央、2＝'co-sited'なら点集合の原点`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrPositioning`),
      namedNode(`${rdfs}label`),
      literal(`YCbCrPositioning`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrPositioning`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrPositioning`),
      namedNode(`${exif}tagNumber`),
      literal(`531`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrSubSampling`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrSubSampling`),
      namedNode(`${rdfs}comment`),
      literal(`The sampling ratio of chrominance components in relation to the luminance component. In JPEG compressed data a JPEG marker is used instead of this tag.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrSubSampling`),
      namedNode(`${rdfs}label`),
      literal(`YCbCrSubSampling`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrSubSampling`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yCbCrSubSampling`),
      namedNode(`${exif}tagNumber`),
      literal(`530`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yResolution`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yResolution`),
      namedNode(`${rdfs}comment`),
      literal(`The number of pixels per ResolutionUnit in the ImageLength direction. The same value as XResolution is designated.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yResolution`),
      namedNode(`${rdfs}comment`),
      literal(`画像の表示・印刷時の垂直解像度`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yResolution`),
      namedNode(`${rdfs}label`),
      literal(`YResolution`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yResolution`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}imageDataStruct`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yResolution`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${exif}resolution`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${exif}yResolution`),
      namedNode(`${exif}tagNumber`),
      literal(`283`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${ns6}ns`),
      namedNode(`${dc11}description`),
      literal(`Exifフォーマットの写真からデータを取りだしてRDFで表現するため、Exif 2.2の全てのタグをRDFプロパティとして定義し、さらにそれを記述するのに必要な語彙を追加したボキャブラリ`, 'ja'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${ns6}ns`),
      namedNode(`${dc11}description`),
      literal(`Vocabulaire pour décrire les données Exif d'une photographie. Toutes les balises Exif 2.2 sont définies comme des propriétés RDF, ainsi que plusieurs termes pour donner de l'aide.`, 'fr'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${ns6}ns`),
      namedNode(`${dc11}description`),
      literal(`Vocabulary to describe an Exif format picture data. All Exif 2.2 tags are defined as RDF properties, as well as several terms to help this schema.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${ns6}ns`),
      namedNode(`${dc11}source`),
      namedNode(`${ns1}cp3451.pdf`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${ns6}ns`),
      namedNode(`${dc11}title`),
      literal(`Exif data description vocabulary`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${ns6}ns`),
      namedNode(`${dcterms}created`),
      literal(`2003-07-18`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${ns6}ns`),
      namedNode(`${dcterms}modified`),
      literal(`2003-08-19`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${ns6}ns`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(exif)
    ),
    quad(
      namedNode(`${ns6}ns`),
      namedNode(`${owl}versionInfo`),
      literal(`Experimental version.`, 'en'),
      namedNode(exif)
    ),
    quad(
      namedNode(`${ns6}ns`),
      namedNode(`${foaf}maker`),
      namedNode('urn:pin:MK705'),
      namedNode(exif)
    ),
    quad(
      namedNode('urn:pin:MK705'),
      namedNode(`${rdf}type`),
      namedNode(`${foaf}Person`),
      namedNode(exif)
    ),
    quad(
      namedNode('urn:pin:MK705'),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns10}webwho.rdf`),
      namedNode(exif)
    ),
    quad(
      namedNode('urn:pin:MK705'),
      namedNode(`${foaf}name`),
      literal(`神崎正英`, 'ja'),
      namedNode(exif)
    ),
    quad(
      blankNodes[0],
      namedNode(`${ns11}code`),
      literal(``, 'en'),
      namedNode(exif)
    ),
    quad(
      blankNodes[0],
      namedNode(`${ns11}trial`),
      namedNode(`${ns12}exif2rdf`),
      namedNode(exif)
    ),
    quad(
      blankNodes[0],
      namedNode(`${dc11}description`),
      literal(`IFD nodes correspond Exif's IFD directories. Each tag in the directory is described as a property. Some tags are defined as integer in EXIF, but may be better to use (controlled) string value, e.g, use 'top-left' instead of integer value '1' for 'orientation' tag.`, 'en'),
      namedNode(exif)
    ),
    quad(
      blankNodes[0],
      namedNode(`${dc11}description`),
      literal(`IFDノードはExifのIFDディレクトリに、それぞれのタグはプロパティに対応。Exifタグの多くは数値で記録されているが、'orientation'の値を'1'とするよりは'top-left'とするほうが利用しやすいと思われる（これには統制語彙リストが必要か）。`, 'ja'),
      namedNode(exif)
    ),
    quad(
      blankNodes[0],
      namedNode(`${rdf}type`),
      namedNode(`${ns11}Example`),
      namedNode(exif)
    ),

  ]
}
