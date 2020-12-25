module ApplicationHelper
  def render_checkbox(section_name, number)
    raw("<input type=\"checkbox\"
         class=\"custom-control-input\"
         id=\"#{section_name}Layout#{number}\"
         data-action=\"change->#{section_name.pluralize}--#{section_name}-#{number}#toggle\">")
  end

  def render_label(section_name, number)
    raw("<label class=\"custom-control-label text-secondary\"
                for=\"#{section_name}Layout#{number}\"
                data-#{section_name.pluralize}--#{section_name}-#{number}-target=\"label\">See Live</label>"
      )
  end
end
