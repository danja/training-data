<?xml version="1.0" encoding="utf-8"?>
<!--
     This is a probably very badly written and
     incorrect stylesheet to convert SVG into
     HTML.

     Author: Dean Jackson <dean@w3.org>
-->

<xsl:stylesheet 
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  exclude-result-prefixes="svg xlink"
  version="1.0">
  
  <xsl:output method="xml" 
    indent="yes"
    encoding="utf-8"
    doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"
    doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>
          <xsl:value-of select="/svg:svg/svg:title"/>
        </title>
        <link rel="stylesheet" href="http://www.w3.org/2002/05/svg2html.css" type="text/css" />
      </head>
      <body>
        <xsl:apply-templates/>
        <hr />
          <p lang="en" xml:lang="en">Output from svg2html: $Id: svg2html.xsl,v 1.3 2003/06/05 04:25:12 dean Exp $ (a work in progress)</p>
      </body>
    </html>
  </xsl:template>
    
  <xsl:template match="svg:text">
    <div class="svgtext">
      <p>
        <xsl:choose>
          <xsl:when test="@id">
            <xsl:apply-templates/>
            [element: 
            <span class="svgdetails">
              <xsl:value-of select="local-name(.)"/>
            </span>]
            [id: 
            <span class="svgdetails">
              <xsl:value-of select="./@id"/>
            </span>]
          </xsl:when>
          <xsl:otherwise>
            <xsl:apply-templates/>
          </xsl:otherwise>
        </xsl:choose>
        <!-- this is a really horrible hack just for demonstration
             purposes. The filter could be set by style attribute or
             stylesheet, so this only works if the presentation
             attribute is set -->
        <xsl:if test="@filter">
          [filter: 
          <span class="svgdetails">
            <xsl:value-of select="./@filter"/>
          </span>]
        </xsl:if>
      </p>
    </div>
  </xsl:template>


  <xsl:template match="svg:desc">
    <div class="svgdesc">
      <p>
        <xsl:choose>
          <xsl:when test="../@id">
            <xsl:apply-templates/>
            [element: 
            <span class="svgdetails">
              <xsl:value-of select="local-name(..)"/>
            </span>]
            [id: 
            <span class="svgdetails">
              <xsl:value-of select="../@id"/>
            </span>]
          </xsl:when>
          <xsl:otherwise>
            <xsl:apply-templates/>
          </xsl:otherwise>
        </xsl:choose>
      </p>
    </div>
  </xsl:template>

  <xsl:template match="svg:title">
    <div class="svgtitle">
      <p>
        <xsl:choose>
          <xsl:when test="../@id">
            <xsl:apply-templates/>
            [id: 
            <span class="svgdetails">
              <xsl:value-of select="../@id"/>
            </span>]
          </xsl:when>
          <xsl:otherwise>
            <xsl:apply-templates/>
          </xsl:otherwise>
        </xsl:choose>
      </p>
    </div>
  </xsl:template>

  <xsl:template match="svg:metadata">
    <div class="svgmetadata">
      <p>
        <xsl:apply-templates/>
      </p>
    </div>
  </xsl:template>

  <!-- Unfortunately tref does not expand into its referenced text (yet:) -->
  <xsl:template match="svg:tref">
    <span class="svgtref">
      [text reference: 
      <span class="svgdetails">
        <xsl:value-of select="@xlink:href"/>
      </span>]
      <xsl:apply-templates/>
    </span>
  </xsl:template>

  <xsl:template match="svg:tspan|svg:textPath">
    <span><xsl:apply-templates/></span>
  </xsl:template>

  <!--
  <xsl:template match="svg:text//text()|svg:desc//text()|svg:title//text()|svg:metadata//text()">
    <xsl:value-of select="normalize-space(.)"/>
    <xsl:text> 
</xsl:text> 
  </xsl:template>

  <xsl:template match="text()">
  </xsl:template>
-->

</xsl:stylesheet>
