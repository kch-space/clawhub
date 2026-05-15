/**
 * CSS Variables Verification Script
 *
 * Run this script in the browser console to verify all CSS variables are correctly set.
 *
 * Usage:
 * 1. Open the application in a browser
 * 2. Open DevTools Console (F12)
 * 3. Copy and paste this entire script
 * 4. Press Enter to run
 */

(function verifyCSSVariables() {
  console.log('%c🎨 Design System CSS Variables Verification', 'font-size: 20px; font-weight: bold; color: #a855f7;');
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #a855f7;');

  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);

  // Define expected CSS variables
  const expectedVariables = {
    'Color Variables': {
      primary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
      secondary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
      neutral: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
      semantic: {
        success: ['light', 'main', 'dark'],
        error: ['light', 'main', 'dark'],
        warning: ['light', 'main', 'dark'],
        info: ['light', 'main', 'dark'],
      },
      gradients: ['primary', 'secondary', 'radial'],
    },
    'Typography Variables': {
      'font-family': ['sans', 'mono'],
      'font-size': ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      'font-weight': ['light', 'normal', 'medium', 'semibold', 'bold'],
      'line-height': ['tight', 'normal', 'relaxed'],
      'letter-spacing': ['tight', 'normal', 'wide'],
    },
    'Spacing Variables': {
      spacing: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24],
    },
    'Radius Variables': {
      radius: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    'Shadow Variables': {
      shadow: ['sm', 'md', 'lg', 'xl', 'inner'],
    },
  };

  let totalVariables = 0;
  let foundVariables = 0;
  let missingVariables = [];

  // Helper function to check if a CSS variable exists
  function checkVariable(varName) {
    const value = computedStyle.getPropertyValue(varName).trim();
    totalVariables++;
    if (value) {
      foundVariables++;
      return { exists: true, value };
    } else {
      missingVariables.push(varName);
      return { exists: false, value: null };
    }
  }

  // Check Color Variables
  console.log('\n%c📦 Color Variables', 'font-size: 16px; font-weight: bold; color: #6366f1;');
  console.log('─────────────────────────────────────────────────────────────────────────────────');

  // Primary colors
  console.log('%c  Primary Colors:', 'font-weight: bold; color: #a855f7;');
  expectedVariables['Color Variables'].primary.forEach(shade => {
    const varName = `--color-primary-${shade}`;
    const result = checkVariable(varName);
    if (result.exists) {
      console.log(`    ✅ ${varName}: ${result.value}`);
    } else {
      console.log(`    ❌ ${varName}: NOT FOUND`);
    }
  });

  // Secondary colors
  console.log('%c  Secondary Colors:', 'font-weight: bold; color: #3b82f6;');
  expectedVariables['Color Variables'].secondary.forEach(shade => {
    const varName = `--color-secondary-${shade}`;
    const result = checkVariable(varName);
    if (result.exists) {
      console.log(`    ✅ ${varName}: ${result.value}`);
    } else {
      console.log(`    ❌ ${varName}: NOT FOUND`);
    }
  });

  // Neutral colors
  console.log('%c  Neutral Colors:', 'font-weight: bold; color: #737373;');
  expectedVariables['Color Variables'].neutral.forEach(shade => {
    const varName = `--color-neutral-${shade}`;
    const result = checkVariable(varName);
    if (result.exists) {
      console.log(`    ✅ ${varName}: ${result.value}`);
    } else {
      console.log(`    ❌ ${varName}: NOT FOUND`);
    }
  });

  // Semantic colors
  console.log('%c  Semantic Colors:', 'font-weight: bold;');
  Object.entries(expectedVariables['Color Variables'].semantic).forEach(([color, variants]) => {
    variants.forEach(variant => {
      const varName = `--color-${color}-${variant}`;
      const result = checkVariable(varName);
      if (result.exists) {
        console.log(`    ✅ ${varName}: ${result.value}`);
      } else {
        console.log(`    ❌ ${varName}: NOT FOUND`);
      }
    });
  });

  // Gradients
  console.log('%c  Gradients:', 'font-weight: bold;');
  expectedVariables['Color Variables'].gradients.forEach(gradient => {
    const varName = `--gradient-${gradient}`;
    const result = checkVariable(varName);
    if (result.exists) {
      console.log(`    ✅ ${varName}: ${result.value}`);
    } else {
      console.log(`    ❌ ${varName}: NOT FOUND`);
    }
  });

  // Check Typography Variables
  console.log('\n%c📝 Typography Variables', 'font-size: 16px; font-weight: bold; color: #6366f1;');
  console.log('─────────────────────────────────────────────────────────────────────────────────');

  Object.entries(expectedVariables['Typography Variables']).forEach(([category, values]) => {
    console.log(`%c  ${category}:`, 'font-weight: bold;');
    values.forEach(value => {
      const varName = `--${category}-${value}`;
      const result = checkVariable(varName);
      if (result.exists) {
        console.log(`    ✅ ${varName}: ${result.value}`);
      } else {
        console.log(`    ❌ ${varName}: NOT FOUND`);
      }
    });
  });

  // Check Spacing Variables
  console.log('\n%c📏 Spacing Variables', 'font-size: 16px; font-weight: bold; color: #6366f1;');
  console.log('─────────────────────────────────────────────────────────────────────────────────');
  expectedVariables['Spacing Variables'].spacing.forEach(space => {
    const varName = `--spacing-${space}`;
    const result = checkVariable(varName);
    if (result.exists) {
      console.log(`  ✅ ${varName}: ${result.value}`);
    } else {
      console.log(`  ❌ ${varName}: NOT FOUND`);
    }
  });

  // Check Radius Variables
  console.log('\n%c⭕ Border Radius Variables', 'font-size: 16px; font-weight: bold; color: #6366f1;');
  console.log('─────────────────────────────────────────────────────────────────────────────────');
  expectedVariables['Radius Variables'].radius.forEach(radius => {
    const varName = `--radius-${radius}`;
    const result = checkVariable(varName);
    if (result.exists) {
      console.log(`  ✅ ${varName}: ${result.value}`);
    } else {
      console.log(`  ❌ ${varName}: NOT FOUND`);
    }
  });

  // Check Shadow Variables
  console.log('\n%c🌑 Shadow Variables', 'font-size: 16px; font-weight: bold; color: #6366f1;');
  console.log('─────────────────────────────────────────────────────────────────────────────────');
  expectedVariables['Shadow Variables'].shadow.forEach(shadow => {
    const varName = `--shadow-${shadow}`;
    const result = checkVariable(varName);
    if (result.exists) {
      console.log(`  ✅ ${varName}: ${result.value}`);
    } else {
      console.log(`  ❌ ${varName}: NOT FOUND`);
    }
  });

  // Summary
  console.log('\n%c📊 Verification Summary', 'font-size: 18px; font-weight: bold; color: #a855f7;');
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #a855f7;');
  console.log(`%c  Total Variables Checked: ${totalVariables}`, 'font-size: 14px; font-weight: bold;');
  console.log(`%c  Found: ${foundVariables}`, 'font-size: 14px; font-weight: bold; color: #16a34a;');
  console.log(`%c  Missing: ${missingVariables.length}`, 'font-size: 14px; font-weight: bold; color: #dc2626;');
  console.log(`%c  Success Rate: ${((foundVariables / totalVariables) * 100).toFixed(2)}%`, 'font-size: 14px; font-weight: bold;');

  if (missingVariables.length > 0) {
    console.log('\n%c⚠️  Missing Variables:', 'font-size: 14px; font-weight: bold; color: #f59e0b;');
    missingVariables.forEach(varName => {
      console.log(`  ❌ ${varName}`);
    });
  } else {
    console.log('\n%c✅ All CSS variables are correctly set!', 'font-size: 16px; font-weight: bold; color: #16a34a;');
  }

  console.log('\n%c💡 Tip: You can also inspect CSS variables in DevTools:', 'font-size: 12px; color: #737373;');
  console.log('%c   1. Open Elements tab', 'font-size: 12px; color: #737373;');
  console.log('%c   2. Select <html> or :root element', 'font-size: 12px; color: #737373;');
  console.log('%c   3. Look for :root section in Styles panel', 'font-size: 12px; color: #737373;');
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #a855f7;');

  return {
    total: totalVariables,
    found: foundVariables,
    missing: missingVariables,
    successRate: ((foundVariables / totalVariables) * 100).toFixed(2) + '%',
  };
})();
