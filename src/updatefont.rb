#!/usr/bin/env ruby
%w(yaml json nokogiri open-uri).each { |lib| require lib }

# code map
yaml = open('https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/src/icons.yml')
icon_data = YAML.load(yaml)["icons"]
code_map = Hash[icon_data.map { |i| [i["id"], i["unicode"].to_i(16).chr(Encoding::UTF_8)]}]

# font
svg = Nokogiri::XML(open('https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/fonts/fontawesome-webfont.svg'))
font = svg.xpath('/svg/defs/font')
hDefault= font.attribute('horiz-adv-x').value.to_f
paths = Hash[code_map.map { |k, v| 
  glyph = font.xpath("glyph[@unicode = '#{v}']").first
  h = glyph.attribute('horiz-adv-x')
  [v, [h ? h.value.to_f : hDefault, URI.escape(glyph.attribute('d').value)]]
}]

# write json to incorporate into mma.ts and index.html
json = { codes: code_map, paths: paths }
File.write('fontawesome.json', JSON.pretty_generate(json).gsub(/[\uf000-\uf500]/) { |match| "\\u#{match.ord.to_s(16)}" })
File.write('fontawesome-names.json', code_map.map { |k, v| k }.to_json)
