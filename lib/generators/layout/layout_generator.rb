require 'pry-byebug'
class LayoutGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('templates', __dir__)
  class_option :section, type: :string
  class_option :number, type: :string

  def create_html_layout
    layout_to_generate = "app/views/#{options[:section]}s/_#{options[:section]}_#{options[:number]}.html.erb"

    copy_file "template_layout.html.erb", layout_to_generate
    gsub_file layout_to_generate,
              'SECTIONS', options[:section] + 's'

    gsub_file layout_to_generate,
              'SECTION', options[:section]

    gsub_file layout_to_generate,
              'NUMBER', options[:number]

  end

  def create_stimulus_controller
    copy_file "template_stimulus_controller.js",
              "app/javascript/controllers/#{options[:section]}s/#{options[:section]}_#{options[:number]}_controller.js"
  end

end
